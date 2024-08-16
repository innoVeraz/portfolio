import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veronica | Portfolio",
  description: "Veronica is a rapidly growing Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-neutral-200 text-neutral-800`}>
        <div className="flex gap-6">
          <div className="bg-[#dfbf66] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#fdbf00]" />
          <div className="bg-[#fdbf00] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#dfbf66]" />
        </div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
