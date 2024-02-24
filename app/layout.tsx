import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileHeader from "@/components/header/MobileHeader";
import Providers from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dramatic",
  description:
    "Dramatic is a OTT platform where Movies and TV shows are streaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <MobileHeader />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
