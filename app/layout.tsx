import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { inter, laBelleAurore, publicSans } from "./fonts";

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
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${publicSans.variable} ${laBelleAurore.variable} min-h-[100dvh] grid grid-rows-[auto_1fr_auto]`}
      >
        <header className="w-full fixed top-0 z-50 bg-transparent">
          <Header />
        </header>
        <main className="w-full">{children}</main>
        <footer className="w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
