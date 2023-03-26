"use client";
import React from "react";
import Card from "../Libs/Card";
import Link from "next/link";
import Button from "../Libs/Button";

const News = () => {
  return (
    <div
      id="News"
      className="w-full grid grid-cols-1   lg:grid-cols-3   max-w-7xl  px-10 md:px-14 mx-auto  mt-40 gap-5 md:gap-10"
    >
      <HeadingText />
      <div className="col-span-1 lg:col-span-2  grid grid-cols-1  sm:grid-cols-2   gap-5 md:gap-10">
        {data.map((card, index) => (
          <Card
            title={card.title}
            text={card.text}
            image={card.image}
            type="base"
            url={card.url}
            key={index}
            height={450}
            cardLink={card.cardLink}
          />
        ))}
      </div>
    </div>
  );
};

export default News;

const HeadingText = () => {
  return (
    <div className="col-span-1  flex flex-col gap-3">
      <h2 className="font-Space-Grotesk text-2xl font-bold text-white">
        Latest News
      </h2>
      <h5 className="font-Sarabun text-base font-normal text-white/75">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
        fugiat animi incidunt dignissimos, vero numquam? Officiis tenetur, optio
        blanditiis obcaecati doloremque non ex earum numquam atque? Laboriosam
        repellat dolor commodi.
      </h5>
      <h5 className="font-Sarabun text-base font-normal text-white/75">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem animi
        possimus consequuntur, unde mollitia impedit tenetur explicabo
        voluptatum tempore dicta ut adipisci fuga illo aut neque libero
        blanditiis dignissimos veniam.
      </h5>
      <Button onClick={() => {}} type="2" link="https://www.hoyolab.com/home/2">
        View all news
      </Button>
    </div>
  );
};
const data = [
  {
    title: `"Fungus Mechanicus" Gameplay Tips`,
    text: `The "Fungus Mechanicus" event will be available on March 23, 2023 at 10:00. The friends whom you made during the journey have come up with a new game. All the best for the challenges!`,
    image: "/news/Fungus Mechanicus Gameplay Tips.jpg",
    type: "base",
    url: "/character/hutao_.png",
    cardLink: "https://genshin.hoyoverse.com/en/news/detail/105597",
  },
  {
    title: `Collected Miscellany - "Mika: Constellatory Companion"`,
    text: `Gaze not on the velvety snowflakes with belittling eyes.

    For when the frost congeals, they can become stars of sparkling silver, offering guidance to all.`,
    image: "/news/Gaze not on the velvety snowflakes with belittling eyes..jpg",
    type: "base",
    url: "/character/hutao_.png",
    cardLink: "https://genshin.hoyoverse.com/en/news/detail/105595",
  },
  {
    title: `Genshin Impact EP - A Scattered Rainbow Over Spring Dew`,
    text: `Take a stroll into the woods, and you'll see frost condensing on the cold dewdrops.

    Should you pause for a moment, you can see the sunlight forming a rainbow, shaped like a corridor.`,
    image:
      "/news/Take a stroll into the woods, and you'll see frost condensing on the cold dewdrops..jpg",
    type: "base",
    url: "/character/hutao_.png",
    cardLink: "https://genshin.hoyoverse.com/en/news/detail/105574",
  },
  {
    title: `Stream Genshin Impact content on TikTok for a chance to win Primogems`,
    text: `From March 13, Stream Genshin Impact content on TikTok for a chance to win Primogems and other rewards! Click the link now to participate!`,
    image:
      "/news/Stream Genshin Impact content on TikTok for a chance to win Primogems.jpg",
    type: "base",
    url: "/character/hutao_.png",
    cardLink: "https://genshin.hoyoverse.com/en/news/detail/105552",
  },
];
