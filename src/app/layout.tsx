// src/app/layout.tsx

import type { Metadata } from "next";
// Importa as fontes do pacote 'geist' que acabamos de instalar
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Espaço Acolher - Conscientização sobre ISTs",
  description: "Um ambiente seguro e anônimo para tirar suas dúvidas sobre ISTs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/*
        A forma de aplicar as fontes muda um pouco.
        Usamos as variáveis CSS que o próprio pacote 'geist' fornece.
      */}
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}