"use client";
import Image from "next/image";
import React from "react";
import Button from "../Libs/Button";

const MainContent = () => {
  return (
    <div className="absolute z-10 w-full h-full top-0  flex flex-col justify-center items-center max-w-7xl py-36 px-10 md:px-14  ">
      <Main />
    </div>
  );
};

export default MainContent;

const Main = () => {
  return (
    <div className="w-full max-w-md flex flex-col justify-between gap-4 ">
      <h2 className="font-Cinzel text-4xl font-semibold text-white  ">
        Try Genshin Impact Now!
      </h2>
      <h4 className="font-Sarabun text-2xl font-normal text-white/60 mb-5 ">
        Jump into the vast world of Tyvat, where Archons resides
      </h4>
      <ButtonDiv />
    </div>
  );
};

const ButtonDiv = () => {
  return (
    <div className="flex gap-10 justify-center">
      <Button download="google" />
      <Button download="apple" />
    </div>
  );
};
