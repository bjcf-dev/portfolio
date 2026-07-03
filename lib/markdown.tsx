import type { ReactNode } from "react";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inlineFormat(line: string): ReactNode {
  const parts: ReactNode[] = [];
  let remaining = escapeHtml(line);
  let key = 0;

  const patterns: [RegExp, (m: string[]) => ReactNode][] = [
    [/`([^`]+)`/g, ([, code]) => <code key={key++} className="bg-muted rounded px-1 py-0.5 text-sm">{code}</code>],
    [/\*\*([^*]+)\*\*/g, ([, text]) => <strong key={key++}>{text}</strong>],
    [/\*([^*]+)\*/g, ([, text]) => <em key={key++}>{text}</em>],
    [/\[([^\]]+)\]\(([^)]+)\)/g, ([, text, url]) => <a key={key++} href={url} target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2">{text}</a>],
  ];

  const splits: { text: string; node?: ReactNode }[] = [{ text: remaining }];

  for (const [regex, build] of patterns) {
    for (let i = 0; i < splits.length; i++) {
      const s = splits[i];
      if (s.node !== undefined) continue;
      const match = regex.exec(s.text);
      if (!match) continue;

      const before = s.text.slice(0, match.index);
      const after = s.text.slice(match.index + match[0].length);
      splits.splice(i, 1, { text: before }, { text: "", node: build(match) }, { text: after });
      i += 2;
      regex.lastIndex = 0;
    }
  }

  return splits.map((s, i) => s.node ?? <span key={key++}>{s.text}</span>);
}

function parseTableRow(line: string): string[] {
  return line
    .split("|")
    .slice(1, -1)
    .map((c) => c.trim());
}

function isTableSeparator(line: string): boolean {
  return /^\|?[\s:-]+\|[\s:-]+\|/.test(line.trim());
}

export function renderMarkdown(md: string): ReactNode {
  const lines = md.split("\n");
  const nodes: ReactNode[] = [];
  let key = 0;
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let inTable = false;
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];
  let listStack: { ordered: boolean; items: ReactNode[] }[] = [];

  function flushCodeBlock() {
    if (codeBuffer.length > 0) {
      nodes.push(
        <pre key={key++} className="bg-muted my-4 overflow-x-auto rounded-lg p-4 text-sm">
          <code>{codeBuffer.join("\n")}</code>
        </pre>
      );
      codeBuffer = [];
    }
  }

  function flushTable() {
    if (tableHeaders.length > 0) {
      nodes.push(
        <div key={key++} className="my-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-border border-b">
                {tableHeaders.map((h, i) => (
                  <th key={i} className="text-foreground px-3 py-2 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i} className="border-border border-b">
                  {row.map((cell, j) => (
                    <td key={j} className="text-muted-foreground px-3 py-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableHeaders = [];
      tableRows = [];
    }
  }

  function flushList() {
    for (const list of listStack) {
      const Tag = list.ordered ? "ol" : "ul";
      nodes.push(
        <Tag key={key++} className="my-2 list-inside list-disc space-y-1">
          {list.items.map((item, i) => (
            <li key={i} className="text-muted-foreground">{item}</li>
          ))}
        </Tag>
      );
    }
    listStack = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (inCodeBlock) {
      if (line.startsWith("```")) {
        inCodeBlock = false;
        flushCodeBlock();
      } else {
        codeBuffer.push(line);
      }
      continue;
    }

    if (line.startsWith("```")) {
      flushTable();
      flushList();
      inCodeBlock = true;
      codeBuffer = [];
      continue;
    }

    if (line.trim() === "") {
      if (inTable) flushTable();
      flushList();
      continue;
    }

    if (line.startsWith("#")) {
      flushTable();
      flushList();
      const level = line.match(/^#+/)![0].length;
      const text = line.slice(level).trim();
      const Tag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;
      nodes.push(
        <Tag key={key++} className="text-foreground mt-6 mb-2 font-bold tracking-tight" style={{ fontSize: `${1.5 - level * 0.15}rem` }}>
          {inlineFormat(text)}
        </Tag>
      );
      continue;
    }

    if (line.startsWith("---")) {
      flushTable();
      flushList();
      nodes.push(<hr key={key++} className="border-border my-6" />);
      continue;
    }

    // Table
    if (line.startsWith("|")) {
      if (isTableSeparator(line)) continue;
      const cells = parseTableRow(line);
      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
      } else {
        tableRows.push(cells);
      }
      continue;
    }

    // List item
    const listMatch = line.match(/^(\s*)([-*]\s|(\d+)\.\s)(.+)/);
    if (listMatch) {
      const content = listMatch[4];
      const ordered = !!listMatch[3];
      if (listStack.length === 0 || listStack[listStack.length - 1].ordered !== ordered) {
        flushList();
        listStack.push({ ordered, items: [] });
      }
      listStack[listStack.length - 1].items.push(inlineFormat(content));
      continue;
    }

    // Regular paragraph
    flushTable();
    flushList();
    if (line.startsWith("> ")) {
      nodes.push(
        <blockquote key={key++} className="border-l-foreground text-muted-foreground my-4 border-l-2 pl-4 italic">
          {inlineFormat(line.slice(2))}
        </blockquote>
      );
    } else {
      nodes.push(
        <p key={key++} className="text-muted-foreground my-2">{inlineFormat(line)}</p>
      );
    }
  }

  flushCodeBlock();
  flushTable();
  flushList();

  return nodes;
}
