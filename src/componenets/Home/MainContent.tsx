"use client";
import Image from "next/image";
import React from "react";
import Button from "../Libs/Button";

const MainContent = () => {
  return (
    <div
      className="absolute z-10 w-full h-full top-0  flex flex-col sm:justify-between max-w-7xl pt-24 sm:pt-36  sm:pb-36 px-10 md:px-14  "
      id="Home"
    >
      <div className="w-0 h-0 hidden sm:block" />
      <Main />
      <Reviews />
    </div>
  );
};

export default MainContent;

const Main = () => {
  return (
    <div className="w-full flex-1 max-w-md flex flex-col  justify-between  gap-10 ">
      <div className="flex flex-col justify-between  gap-10">
        <h2 className="font-Cinzel text-3xl sm:text-6xl font-semibold text-white  ">
          Tech Otaku Saves the World!
        </h2>
        <h4 className="font-Sarabun text-lg sm:text-2xl font-normal text-white/60 ">
          Jump into the vast world of Tyvat, where Archons resides
        </h4>
      </div>
      <ButtonDiv />
    </div>
  );
};

const ButtonDiv = () => {
  return (
    <div className="flex gap-5">
      <Button download="google" />
      <Button download="apple" />
    </div>
  );
};

const Reviews = () => {
  let rating = 4.7;
  let ratingCount = 28175;

  return (
    <div className=" flex gap-2 items-center py-10">
      <div className="relative h-10 w-20">
        {pfp.map((link, index) => (
          <PFPs key={index} index={index} link={link} />
        ))}
      </div>
      <div className="flex flex-col h-10 ">
        <div className="flex gap-1 items-center">
          <p className="text-sm font-bold font-Sarabun text-white">{rating}</p>
          <div className="flex gap-0.5 h-3">
            {["", "", "", "", ""].map((i, index) => (
              <Star rating={rating - index} key={index} />
            ))}
          </div>
        </div>
        <p className="text-sm font-normal font-Sarabun text-white/90">{`${new Intl.NumberFormat().format(
          ratingCount
        )} reviews`}</p>
      </div>
    </div>
  );
};
const Star = ({ rating }: { rating: number }) => (
  <div className="h-full aspect-square relative">
    <Image fill className="object-contain" alt="" src="/assets/graystar.svg" />
    <div
      className={`h-full  absolute overflow-hidden 
    ${rating >= 0.9 && "aspect-square"}  
    ${rating < 0.9 && rating >= 0.6 && "aspect-[0.7]"} 
    ${rating < 0.6 && rating >= 0.4 && "aspect-[0.5]"}
     ${rating < 0.4 && rating >= 0.1 && "aspect-[0.25]"}`}
    >
      <div
        className={`h-full  aspect-square relative
   `}
      >
        <Image fill className="object-cover " alt="" src="/assets/star.svg" />
      </div>
    </div>
  </div>
);
const PFPs = ({ index, link }: { index: number; link: string }) => {
  return (
    <div
      className={`h-full aspect-square absolute rounded-full bg-white flex items-center  justify-center ${
        index === 0 && "left-0 z-[4]"
      } ${index === 1 && "left-4 z-[5]"} ${index === 2 && "left-8 z-[6]"}`}
    >
      <div className="h-5/6 aspect-square relative overflow-hidden rounded-full">
        <Image fill className="object-cover" alt="" src={link} />
      </div>
    </div>
  );
};

const pfp = [
  "/characters/hutao.jpg",
  "/Streamers/pfpone.png",
  "/Streamers/pfptwo.jpg",
];
