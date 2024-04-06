import React from 'react';
import Link from "next/link";

function Footer() {
    return (
        <div className={"flex justify-around mt-20 border-t-2 border-gray-400 mb-10"}>
            <div className="hidden md:flex items-center">
                <p className={"text-3xl font-bold"}>LamaBlog</p>
            </div>
            <div className="links flex flex-col gap-2 items-center justify-center font-semibold">
                <Link href={"/"}>HomePage</Link>
                <Link href={"/"}>Blog</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Contact</Link>
            </div>

            <div className="Social flex flex-col gap-2 items-center justify-center font-semibold">
                <Link href={"/"}>Facebook</Link>
                <Link href={"/"}>Instagram</Link>
                <Link href={"/"}>TikTok</Link>
                <Link href={"/"}>YouTube</Link>
            </div>
        </div>
    );
}

export default Footer;