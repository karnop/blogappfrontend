import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Featured from "@/components/featured";
import CategoryList from "@/components/categoryList";
import CardList from "@/components/cardList";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className={""}>
        <Featured/>
        <CategoryList/>
        <div className={"flex flex-col lg:flex-row md:gap-20"}>
            <CardList/>
            <Menu/>
        </div>
    </main>
  );
}
