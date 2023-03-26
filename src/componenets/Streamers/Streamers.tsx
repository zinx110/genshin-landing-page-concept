"use client";
import React, { useEffect, useState } from "react";
import Card from "../Libs/Card";
import Link from "next/link";

const Streamers = () => {
  const [characters, setCharacters] = useState(data);
  useEffect(() => {}, []);

  return (
    <div
      className="w-full flex flex-col max-w-7xl  px-10 md:px-14 mx-auto  mt-40"
      id="Live"
    >
      <HeadingText />
      <div className=" grid grid-cols-1  sm:grid-cols-2   gap-5 md:gap-10 my-20">
        {characters.map((card, index) => (
          <Card
            title={card.title}
            text={card.text}
            image={card.image}
            image2={card.image2}
            type="streamer"
            url={card.url}
            key={index}
            cardLink={card.cardLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Streamers;

const HeadingText = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col gap-3">
        <h2 className="font-Space-Grotesk text-2xl font-bold text-white">
          Featured Streamers
        </h2>
        <h5 className="font-Sarabun text-base font-normal text-white/75">
          Lorem ipsum dolor sit amet.
        </h5>
      </div>
      <Link
        href={"https://www.twitch.tv/directory/game/Genshin%20Impact"}
        className="font-Sarabun text-base font-bold text-white/60 hover:text-white/90"
      >
        All Streamers
      </Link>
    </div>
  );
};
const data = [
  {
    title: "Tuonto",
    text: "@Tuont0",
    image2: "/Streamers/one.jpg",
    image: "/Streamers/pfpone.png",
    url: "",
    cardLink: "https://www.twitch.tv/tuonto",
  },
  {
    title: "Anthonychenn",
    text: "@anthonychenn",
    image2: "/Streamers/two.jpg",
    image: "/Streamers/pfptwo.jpg",
    url: "",

    cardLink: "https://www.twitch.tv/antonychenn",
  },
];
