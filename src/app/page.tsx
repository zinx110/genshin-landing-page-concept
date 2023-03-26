import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HomePage from "@/componenets/Home/HomePage";
import AboutPage from "@/componenets/About/AboutPage";
import HeroesMain from "@/componenets/Heroes/HeroesMain";
import News from "@/componenets/News/News";
import Streamers from "@/componenets/Streamers/Streamers";
import Footer from "@/componenets/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full flex flex-col relative">
      <HomePage />
      <HeroesMain />
      <News />
      <Streamers />
      <Footer />
    </main>
  );
}
