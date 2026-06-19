import type { Metadata } from "next";
import { Noto_Serif, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Rosa Oriental",
  description: "Descubra como o Rosa Oriental transforma peles maduras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${notoSerif.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
