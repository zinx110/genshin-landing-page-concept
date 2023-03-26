import HeroesMain from "@/componenets/Heroes/HeroesMain";
import React from "react";

const Home = () => {
  return (
    <main className="w-full flex flex-col relative">
      <HeroesMain all />
    </main>
  );
};

export default Home;
