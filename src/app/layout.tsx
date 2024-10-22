"use client";

import {Montserrat} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";


const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
