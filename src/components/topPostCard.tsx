import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaBookOpenReader } from "react-icons/fa6";

function TopPostCard() {
    return (
        <div>
            <div
                className="mb-4 mt-4 p-2 flex-col md:flex-row mr-5 items-center gap-10 hover:bg-slate-500/10 hover:rounded-md overflow-x-hidden">
                <div className="flex h-[200px] md:h-[250px] md:w-[850px] lg:h-[150px] lg:w-[450px]  relative"><Image src={"/p1.jpg"} alt={""} fill
                                                                                          className={"rounded-md object-cover"}/>
                </div>
                <div className="text flex flex-col gap-1">

                    <div className="detail mt-3 flex justify-between">
                        <div>
                            <span className={"mr-2 font-semibold"}>11.12.22</span>
                            <span className={"text-gray-700 dark:text-gray-400 uppercase"}>Culture</span>
                        </div>
                        <div className={""}>
                            <span className={"flex flex-row items-center gap-2"}><p>500</p> <FaBookOpenReader /></span>
                        </div>
                    </div>

                    <h1 className={"text-3xl font-semibold mb-3"}>Lorem ipsum dolor sit amet, consectetu</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto assumenda
                        corporis debitis earum eligendi ex explicabo, facilis ipsam iure magnam nesciunt non obcaecati
                        porro, quae sint ullam voluptatum.</p>

                    <Link href={"/"} className={"mt-4 underline"}>Read More</Link>
                </div>
            </div>
        </div>
    );
}

export default TopPostCard;