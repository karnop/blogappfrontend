import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {Providers} from "@/providers/ThemeProvider";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Blog App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <Providers>
            <div className={"min-h-full text-light-bg ml-5"}>
                <div className={"lg:max-w-[1400px]  md:sm:max-w-full"}>
                    <Navbar/>
                    {children}
                    <Footer/>
                </div>
            </div>
        </Providers>
        </body>
        </html>
    );
}
