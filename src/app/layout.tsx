import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Home Page",
  description: "This is Makerble Assignment",
};

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
      <body className={`${montserrat.variable} antialiased`}>
        <Navigation />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
