import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akol Oscar Benjamin",
  description: "You visualize, I develop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950`}
      >
        <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
        
        <div className="relative z-10">
          <Navbar className="top-2" />
          <main className="mt-16 container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}



