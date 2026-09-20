import type { Metadata } from "next";
import "@fontsource/kanit/300.css";
import "@fontsource/kanit/400.css";
import "@fontsource/kanit/500.css";
import "@fontsource/kanit/600.css";
import "@fontsource/kanit/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luiz Henrique | Desenvolvedor Front-end",
  description:
    "Portfólio de Luiz Henrique, desenvolvedor Front-end e estudante de Análise e Desenvolvimento de Sistemas.",
  icons: { icon: "/assets/favicon.svg" },
  openGraph: {
    title: "Luiz Henrique | Desenvolvedor Front-end",
    description: "Interfaces claras, funcionais e com personalidade.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
