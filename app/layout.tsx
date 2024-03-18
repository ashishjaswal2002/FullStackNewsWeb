import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNotch from "@/components/headers/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NewsApp",
  description: "English News - India Today online cover latest headlines, breaking news, India news and news from all over the world ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body className={inter.className}>

        <TopNotch />

        {children}</body>
    </html>
  );
}
