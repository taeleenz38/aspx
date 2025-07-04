import type { Metadata } from "next";
// import { Playfair_Display } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import "./globals.css";

// const playfair = Playfair_Display({
//   variable: "--font-playfair",
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "ASPX",
  description: "ASPX Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
