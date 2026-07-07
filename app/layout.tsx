import type { Metadata } from "next";
import { Dock } from "@/components/dock";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { LangProvider } from "@/lib/language-context";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal engineering portfolio & SOP hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground flex min-h-screen flex-col pb-20 md:pb-16">
        <LangProvider>
          <ThemeProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Dock />
            <Footer />
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
