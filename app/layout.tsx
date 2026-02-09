import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import Background from "@/components/Background";
import type { Metadata } from "next";


export const metadata:Metadata={
  title:"Sodjinou Carrache | Développeur Full-Stack Flutter, Next.js & NestJS",
  description:"Développeur Full-Stack spécialisé en FLutter , Next.js, NestJS. Application mobiles, web et APIs modernes, performantes et évolutives.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className="font-outfit overflow-x-hidden bg-gray-950">
        <Background/>
        <Header/>
      {children}
      <Footer  />
      </body>
    </html>
  );
}
