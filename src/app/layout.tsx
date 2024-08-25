import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideMenu } from "@/components/ui/side-menu";
import { MobileMenu } from "@/components/ui/mobile-menu";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Encomenda Fácil",
  description: "Sistema de gerenciamento de encomendas do condomínio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <SideMenu />
          <MobileMenu />
          <main className="sm:ml-72 p-4">
            <div className="container mx-auto py-10">{children}</div>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
