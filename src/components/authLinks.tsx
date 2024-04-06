"use client"
import React, {useState} from 'react';
import Link from "next/link";

function AuthLinks() {
    const [open, setOpen] = useState(false);
    // temporary
    const status = "notauthenticated";

    return (
        <>
            {
                status === "notauthenticated" ?
                    (<Link className={"hidden md:block"} href={"/login"}>Login</Link>) :
                    (<div className={"hidden md:block"}>
                        <Link href={"/write"} className={"cursor-pointer"}>Write</Link>
                        <span>Logout</span>
                    </div>)
            }
            {/*Hamburger menu*/}
            <div className={"md:hidden w-[20px] h-[16px] flex flex-col justify-between cursor-pointer"} onClick={() => setOpen(!open)}>
                <div className="w-full h-[2px] bg-black dark:bg-slate-400"></div>
                <div className="w-full h-[2px] bg-black dark:bg-slate-400"></div>
                <div className="w-full h-[2px] bg-black dark:bg-slate-400"></div>
            </div>

            {open && (
                <div className={"absolute top-[100px] left-0 bg-white dark:bg-black h-[calc(100vh-100px)] w-full flex flex-col gap-[50px] text-xl items-center justify-center"}>
                    <Link className={""} href={"/"}>Homepage</Link>
                    <Link className={""} href={"/"}>Contact</Link>
                    <Link className={""}  href={"/"}>About</Link>
                    {
                        status === "notauthenticated" ?
                            (<Link href={"/login"}>Login</Link>) :
                            (<>
                                <Link href={"/write"} className={"cursor-pointer"}>Write</Link>
                                <span>Logout</span>
                            </>)
                    }
                </div>
            )}
        </>
    );
}

export default AuthLinks;