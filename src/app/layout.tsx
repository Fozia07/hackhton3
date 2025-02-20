import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import Topheader from "./component/topheader";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

const montserrat = Montserrat({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  style: 'normal', 
  variable: '--font-montserrat', 
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
        <Topheader/>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
