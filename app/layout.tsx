import type { Metadata } from "next";
import dynamic from 'next/dynamic';

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import ClientProvider from "../components/ClientProvider";
import { ReactNode } from 'react';
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Furniture Shop",
  description: "Best furniture shop in town",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const Toaster= dynamic(() => import('react-hot-toast').then((toaster)=>toaster.Toaster))
  return (
    <html lang="en">
      
      <body className="font-sans bg-gray-100">
        <ClientProvider>
<Toaster position='top-center'/>
        <Navbar />
          <main className="">
            {children}
          </main>
        <Footer/>
        </ClientProvider>
      </body>
    </html>
  );
}