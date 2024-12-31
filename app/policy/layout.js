"use client";

import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }) {
    return (
        <>
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
            <div className="mt-5 mb-[7rem]">
                {children}
            </div>
        </>
    );
}
