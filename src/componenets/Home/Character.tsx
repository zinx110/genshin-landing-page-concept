"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Character = () => {
  return (
    <div className="absolute z-10 w-full h-full top-40   flex justify-end overflow-x-hidden">
      <div className="relative max-w-full h-full aspect-square flex justify-center items-center">
        <BackLight1 />
        <BackLight2 />
        <BackLight3 />
        <CharacterDiv />
      </div>
    </div>
  );
};

export default Character;

const BackLight1 = () => {
  return (
    <div
      className="absolute h-3/5 aspect-[.8] bg-white/5 rounded-full  blur-3xl
     z-10"
    />
  );
};
const BackLight2 = () => {
  return (
    <div className="absolute h-3/4 aspect-[.8] bg-white/5 rounded-full  blur-3xl z-20" />
  );
};
const BackLight3 = () => {
  return (
    <div className="absolute h-4/5 aspect-[.8] bg-white/5 rounded-full blur-3xl  z-20" />
  );
};

const CharacterDiv = () => {
  const characterArray = [
    "/characters/hutao_.png",
    "/characters/hutao_(2).png",
    "/characters/lumine_.png",
  ];
  const [img, setImg] = useState(characterArray[0]);
  useEffect(() => {
    const randomVar = Math.floor(Math.random() * 2.9);
    setImg(characterArray[randomVar]);
  }, []);
  return (
    <div className="absolute h-full max-w-full aspect-[.8] z-30">
      <Image fill className="object-contain" src={img} alt="" />
    </div>
  );
};
