import React from 'react';
import Card from "@/components/card";
import TopPostCard from "@/components/topPostCard";

function Menu() {
    return (
        <div className={" md:basis-1/3"}>
            <h1 className={" flex justify-center lg:justify-start font-bold text-xl lg:text-4xl"}>Top Posts</h1>
            <div className="posts">
                <TopPostCard/>
                <TopPostCard/>
                <TopPostCard/>
                <TopPostCard/>
            </div>
        </div>
    );
}

export default Menu;