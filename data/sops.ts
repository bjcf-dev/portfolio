export interface SOPEntry {
  slug: string;
  title: string;
  description: string;
  repo: string;
  path: string;
  language: string;
}

export const sops: SOPEntry[] = [
  {
    slug: "solana-tokens-spl-token2022",
    title: "Solana Tokens — SPL & Token-2022",
    description:
      "Guía completa para crear y manipular tokens SPL y Token-2022 con extensiones en Solana Devnet.",
    repo: "solana-tokens-spl-token2022",
    path: "SOP.md",
    language: "TypeScript",
  },
  {
    slug: "srm-supplier-instalacion",
    title: "SRM Supplier — Instalación",
    description:
      "SOP de instalación del sistema Mini-SRM-Supplier-Qualification, entorno Symfony + Docker.",
    repo: "Mini-SRM-Supplier-Qualification",
    path: "docs/SOP-INSTALACION.md",
    language: "PHP",
  },
];
