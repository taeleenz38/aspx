import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASPX",
  description: "ASPX Group",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${workSans.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
