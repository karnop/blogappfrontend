import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/themeToggle";
import AuthLinks from "@/components/authLinks";

function Navbar() {
    return (
        <div className={"flex items-center justify-between h-[100px]"}>
            <div className={"flex md:basis-1/3 basis-0 lg:gap-3 md:gap-2"}>
                <div className={"hidden md:block"}><Image src={"/facebook.png"} alt={"Facebook logo"} width={24} height={24}/></div>
                <div className={"hidden md:block"}><Image src={"/instagram.png"} alt={"Instagram logo"} width={24} height={24}/></div>
                <div className={"hidden md:block"}><Image src={"/twitter.png"} alt={"Twitter logo"} width={24} height={24}/></div>
                <div className={"hidden md:block"}><Image src={"/Youtube.png"} alt={"Youtube logo"} width={24} height={24}/></div>
            </div>


            <div className="ml-3 md:ml-0 md:basis-1/3 basis-1/2 flex items-center justify-start md:justify-center font-bold text-3xl" >LamaBlog</div>

            <div className="z-50 mr-4 flex basis-1/2 md:basis-1/3 lg:gap-3 gap-2 items-center justify-end lg:text-[17px] md:text-[14px]">
                <ThemeToggle/>
                <Link className={"hidden md:block"} href={"/"}>Homepage</Link>
                <Link className={"hidden md:block"} href={"/"}>Contact</Link>
                <Link className={"hidden md:block"}  href={"/"}>About</Link>
                <Link className={"hidden md:block"}  href={"/addBlog"}>Add Blog</Link>
            </div>
        </div>
    );
}

export default Navbar;