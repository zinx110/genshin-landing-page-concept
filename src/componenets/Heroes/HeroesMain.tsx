"use client";
import React, { useEffect, useState } from "react";
import Card from "../Libs/Card";
import Link from "next/link";

const HeroesMain = ({ all }: { all?: boolean }) => {
  const [characters, setCharacters] = useState(
    data.filter((k, index) => index < 3)
  );
  useEffect(() => {
    if (!all) {
      const temp = data.filter((k, index) => index < 3);
      setCharacters(temp);
    } else setCharacters(data);
  }, [all]);

  return (
    <div
      className="w-full flex flex-col max-w-7xl  px-10 md:px-14 mx-auto  mt-40 "
      id="Hero"
    >
      <HeadingText />
      <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  gap-5 md:gap-10 my-20">
        {characters.map((card, index) => (
          <Card
            title={card.title}
            text={card.text}
            image={card.image}
            type="hero"
            url={card.url}
            key={index}
            height={400}
            cardLink={card.cardLink}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroesMain;

const HeadingText = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col gap-3">
        <h2 className="font-Space-Grotesk text-2xl font-bold text-white">
          Our Heroes
        </h2>
        <h5 className="font-Sarabun text-base font-normal text-white/75">
          Mighty archons, strong vision bearers and legendary adventurers
        </h5>
      </div>
      <Link
        href={"/Heroes"}
        className="font-Sarabun text-base font-bold text-white/60 hover:text-white/90"
      >
        All Heroes
      </Link>
    </div>
  );
};
const data = [
  {
    title: "Hu Tao",
    text: "76th owner of the Wangshin Funeral Parlor",
    image: "/characters/hutao_.png",
    type: "base",
    url: "/character/hutao_.png",
    cardLink: "https://genshin-impact.fandom.com/wiki/Hu_Tao",
  },
  {
    title: "Lumine",
    text: "The 4th Decendant",
    image: "/characters/lumine_.png",
    type: "hero",
    url: "/character/hutao_.png",
    cardLink: "https://genshin-impact.fandom.com/wiki/Traveler",
  },
  {
    title: "Hu Tao",
    text: "76th owner of the Wangshin Funeral Parlor",
    image: "/characters/hutao_.png",
    type: "base",
    url: "/character/hutao_.png",
    cardLink: "https://genshin-impact.fandom.com/wiki/Hu_Tao",
  },
  {
    title: "Lumine",
    text: "The 4th Decendant",
    image: "/characters/lumine_.png",
    type: "hero",
    url: "/character/hutao_.png",
    cardLink: "https://genshin-impact.fandom.com/wiki/Traveler",
  },
  {
    title: "Hu Tao",
    text: "76th owner of the Wangshin Funeral Parlor",
    image: "/characters/hutao_.png",
    type: "base",
    url: "/character/hutao_.png",
    cardLink: "https://genshin-impact.fandom.com/wiki/Hu_Tao",
  },
  {
    title: "Lumine",
    text: "The 4th Decendant",
    image: "/characters/lumine_.png",
    type: "hero",
    url: "/character/hutao_.png",
    cardLink: "https://genshin-impact.fandom.com/wiki/Traveler",
  },
];
