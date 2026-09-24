import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Reusables/Navbar";
import Footer from "@/Components/Reusables/Footer";

const oswald = Oswald({
  variable: "--font-Oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITLOG-WorkOut",
  description: "...",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme = 'dark'
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >     
      
      <body className="min-h-full flex flex-col">

        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
