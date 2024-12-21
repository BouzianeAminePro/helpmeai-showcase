import { Dosis } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import "./globals.css";

const dosis = Dosis({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Helpmeai",
  description: "Helpmeai is for your daily use opensource ai, Ollama only for now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <body className={`${dosis.className} antialiased`}>
        <div className="flex">
          <nav className="fixed w-full px-4 top-1">
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
        </div>
        <main className="my-[37rem]">
          {children}
        </main>
      </body>
    </html>
  );
}
