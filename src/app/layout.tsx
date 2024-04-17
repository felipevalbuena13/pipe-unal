"use client";
import { ThemeProvider } from "next-themes";
// import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { MathJaxContext } from "better-react-mathjax";
// export const metadata: Metadata = {
//   title: "pipe unal",
//   description: "un sitio para que los aspirantes a la universidad nacional",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="es-co" suppressHydrationWarning>
      <body>
        <ThemeProvider
          storageKey="theme"
          defaultTheme="systen"
          attribute="class"
        >
          <Navbar />
          <MathJaxContext>{children}</MathJaxContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
