import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
// import ClientProvider from "../components/ClientProvider";
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Furniture Shop",
  description: "Best furniture shop in town",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className="font-sans bg-gray-100">
        <Navbar />
        {/* <ClientProvider> */}
          <main className="">
            {children}
          </main>
        {/* </ClientProvider> */}
    
    
      </body>
    </html>
  );
}