import React from 'react';
import Image from "next/image";

function Featured() {
    return (
        <div className={"mt-[30px] mr-5"}>
            <h1 className={"text-[20px] md:text-[40px] lg:text-[60px] xl:text-[70px]"}><b>Hey! Lama dev here!</b> Discover my stories and creative ideas!!</h1>
            <div className={"mt-[60px] flex flex-col lg:flex-row items-center gap-[50px]"}>
                <div className={"lg:basis-1/2 w-full h-[250px] lg:h-[500px] relative"}><Image className={"object-cover"} src={"/p1.jpg"} alt={""} fill/></div>
                <div className={"lg:basis-1/2 flex flex-col gap-[10px] md:gap-[20px]"}>
                    <h1 className={"text-[24px] md:text-[40px] font-semibold text-slate-900 dark:text-slate-400"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, asperiores consectetur,</h1>
                    <p className={"text-[17px] md:text-[22px]"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error eum fuga quas recusandae? At blanditiis, dignissimos est et explicabo illo impedit iste itaque, libero nostrum obcaecati praesentium recusandae tenetur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, cum et id perferendis soluta veritatis voluptatibus. Aperiam architecto aut blanditiis, corporis dolorem fuga, incidunt inventore modi, perspiciatis sequi veniam vitae!</p>
                    <div className={"w-full flex lg:justify-start justify-center mt-3"}>
                        <button
                            className={"bg-rose-500 w-full md:w-fit p-3 rounded-md font-semibold border-b-4 border-rose-500 hover:border-b-4 hover:border-rose-700 justify-center align-middle"}>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;