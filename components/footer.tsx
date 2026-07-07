export function Footer() {
  return (
    <footer className="border-border bg-muted/30 border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center">
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} Billy Flores
        </p>
      </div>
    </footer>
  );
}
