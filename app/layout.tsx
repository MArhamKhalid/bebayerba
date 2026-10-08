import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import { CartProvider } from "./context/CartContext";
import CartDrawerWrapper from "./Components/CartDrawerWrapper";
import Footer from "./Components/Footer";
import PreloaderWrapper from "./Components/PreloaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BEBA YERBA",
  description: "Developed by Arham Khalid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* PreloaderWrapper badha client component logic ne handle karse */}
        <PreloaderWrapper>
          <CartProvider>
            <Header />
            {children}
            <Footer />
            <CartDrawerWrapper />
          </CartProvider>
        </PreloaderWrapper>
      </body>
    </html>
  );
}