import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import WhatsLogo from "./assets/whats-logo.png";
import { CartProvider } from "./componets/cart-context";
import Navbar from "./componets/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptBR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Navbar />
          <div className="mt-14">{children}</div>
        </CartProvider>

        <a
          href="https://wa.me/5541996301244?text=O%20Gustavo%20%C3%A9%20muito%20boiola"
          target="_blank"
          rel="noopener noreferrer"
          className="group fixed bottom-1.5 right-1.5 bg-green-500 text-white p-1 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-green-600 z-50"
          style={{
            fontSize: "24px",
          }}
        >
          <Image
            src={WhatsLogo}
            alt="WhatsApp"
            width={48}
            height={48}
            className="whatsapp-logo w-12 h-12 transition-all duration-300 group-hover:scale-110"
          />
          <span className="whatsapp-text mr-4 hidden group-hover:inline-block ml-3 text-sm">
            Enviar mensagem
          </span>
        </a>
      </body>
    </html>
  );
}
