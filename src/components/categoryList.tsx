import React from 'react';
import Link from "next/link";
import Image from "next/image";

function CategoryList() {
    return (
        <div className={" mt-[50px] mb-[50px] "}>
            <h1 className={"flex justify-center lg:justify-start font-bold text-xl lg:text-4xl"}>Popular Categories</h1>
            <div className="grid mr-5 p-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-between mt-5 capitalize">
                <div className="">
                    <Link href={'/blog?cat=style'} className={"flex items-center gap-4 py-4 justify-center bg-[#57c4ff31] rounded-md"}>
                        Style
                    </Link>
                </div>

                <div className="">
                    <Link href={'/blog?cat=style'} className={"flex items-center gap-4 py-4 justify-center bg-[#da85c731]  px-16 rounded-md"}>
                        Fashion
                    </Link>
                </div>

                <div className="">
                    <Link href={'/blog?cat=style'} className={"flex items-center gap-4 py-4 justify-center bg-[#7fb88133] px-16 rounded-md"}>
                        Food
                    </Link>
                </div>

                <div className="">
                    <Link href={'/blog?cat=style'} className={"flex items-center gap-4 py-4 justify-center bg-[#ffb04f45]  px-16 rounded-md"}>
                        Culture
                    </Link>
                </div>

                <div className="">
                    <Link href={'/blog?cat=style'} className={"flex items-center gap-4 py-4 justify-center bg-[#ff795736] px-16 rounded-md"}>
                        Travel
                    </Link>
                </div>

                <div className="">
                    <Link href={'/blog?cat=style'} className={"flex items-center gap-4 py-4 justify-center bg-[#5e4fff31] px-16 rounded-md"}>
                        Coding
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CategoryList;