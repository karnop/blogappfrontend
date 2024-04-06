import React from 'react';
import Pagination from "@/components/Pagination";
import Image from "next/image";
import Card from "@/components/card";

function CardList() {
    return (
        <div className={"md:basis-1/3"}>
            <h1 className={"flex justify-center lg:justify-start font-bold text-xl lg:text-4xl"}>Recent Posts</h1>
            <div className="posts">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Pagination/>
        </div>
    );
}

export default CardList;