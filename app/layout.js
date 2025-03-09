"use client";

import { Dosis } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import "./globals.css";

const dosis = Dosis({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <body className={`${dosis.className} antialiased h-screen`}>
        <div className="relative overflow-hidden">
          <main>
            <header className="sticky top-0 left-2 z-50 w-full">
              <nav className="mx-auto flex h-24 max-w-7xl gap-x-6 p-6 lg:px-8">
                <div className="flex flex-row">
                  <div className="flex flex-none items-center justify-center h-[40px] w-[40px] rounded-lg">
                    <Link href="/" className="flex items-center gap-x-1">
                      <Image
                        src="/logo.png"
                        alt="logo"
                        width={40}
                        height={40}
                        priority={false}
                        className="dark:invert"
                      />
                    </Link>
                  </div>
                </div>
              </nav>
            </header>
            <div className="mx-auto max-w-7xl pb-4 md:pb-0 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
