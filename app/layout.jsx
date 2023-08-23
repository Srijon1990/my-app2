"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Mymenu from "./component/Mymenu";
import Footer from "./component/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Mymenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
