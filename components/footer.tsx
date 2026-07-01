export function Footer() {
  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
