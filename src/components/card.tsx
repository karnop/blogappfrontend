import React from 'react';
import Image from "next/image";
import Link from "next/link";

function Card() {
    return (
        <div className=" mb-4 mt-4 p-2 flex-col md:flex-row mr-5 items-center gap-10 hover:bg-slate-500/10 hover:rounded-md overflow-x-hidden">
            <div className="flex h-[200px] w-full md:h-[250px] md:w-[850px] relative"><Image src={"/p1.jpg"} alt={""} fill className={"rounded-md object-cover"}/></div>
            <div className="text flex flex-col gap-1">

                <div className="detail mt-3">
                    <span className={"mr-2 font-semibold"}>11.12.22</span>
                    <span className={"text-gray-700 dark:text-gray-400 uppercase"}>Culture</span>
                </div>

                <h1 className={"text-3xl font-semibold mb-3 overflow-hidden"}>Lorem ipsum dolor sit amet, consectetu</h1>
                <p className={" overflow-hidden"}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto assumenda corporis debitis earum eligendi ex explicabo, facilis ipsam iure magnam nesciunt non obcaecati porro, quae sint ullam voluptatum.</p>

                <Link href={"/"} className={"mt-4 underline"}>Read More</Link>
            </div>
        </div>
    );
}

export default Card;