import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "pipe unal",
  description: "un sitio para que los aspirantes a la universidad nacional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="es-co">
      <body>{children}</body>
    </html>
  );
}
