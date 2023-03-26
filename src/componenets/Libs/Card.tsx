"use client";
import Image from "next/image";
import React from "react";
import styles from "./polka.module.css";
import Link from "next/link";

interface cardProps {
  title: string;
  text: string;
  image: string;
  image2?: string;
  type?: "hero" | "base" | "streamer";
  url?: string;
  height?: 400 | 450 | 500;
  cardLink: string;
}

const Card = ({
  title,
  text,
  image,
  image2,
  type,
  height,
  cardLink,
}: cardProps) => {
  return (
    <Link href={cardLink} target="_blank">
      <div
        className={`w-full ${height === 400 && "h-[400px]"} ${
          height === 500 && "h-[500px]"
        } ${height === 450 && "h-[450px]"} 
      ${type === "streamer" && "aspect-video"}
      relative   cursor-pointer hover:scale-105 transition-all duration-200`}
      >
        <CardBG type={type} image={image2} />
        <div
          className={`absolute flex ${
            type !== "streamer" ? "w-full h-full    flex-col" : "h-20 p-4 "
          }  `}
        >
          <CardImage title={title} image={image} image2={image2} type={type} />
          <CardTexts type={type} title={title} text={text} />
        </div>
      </div>
    </Link>
  );
};

export default Card;

const CardImage = ({
  image,
  image2,
  title,
  type,
}: {
  image: string;
  image2?: string;
  title: string;
  type?: "hero" | "base" | "streamer";
}) => {
  return (
    <div
      className={`${
        !image2
          ? "w-full  relative flex-1 px-5 pt-5"
          : "h-full relative aspect-square "
      }`}
    >
      <div
        className={`relative w-full h-full ${
          image2 ? "rounded-full" : "rounded-t-2xl"
        } overflow-hidden`}
      >
        <Image
          fill
          className={type === "base" ? "object-cover" : "object-contain"}
          alt={title}
          src={image}
        />
      </div>
    </div>
  );
};

const CardTexts = ({
  type,
  title,
  text,
}: {
  type?: "hero" | "base" | "streamer";
  title: string;
  text: string;
}) => {
  return (
    <div
      className={`relative w-full  
    
    ${type === "hero" && "h-20"} 
    ${type === "base" && "h-56"} 
    ${type === "streamer" && "h-full"} 
    
    
    `}
    >
      {type === "hero" && (
        <div className="absolute bottom-2 h-[200%] md:h-[200%] w-[calc(100%-2px)] left-px bg-gradient-to-t from-[#050c28]  rounded-b-3xl overflow-hidden p-1">
          <div className={styles.cardPolka} />
        </div>
      )}

      <div
        className={`overflow-hidden h-full w-full flex flex-col  
        ${type === "hero" && "px-8 absolute justify-start "}
        ${type === "base" && "px-5 py-2 justify-start "}
        ${type === "streamer" && "p-0 justify-center px-3"}
        
        `}
      >
        <h3
          className={`font-Sarabun text-white  
        ${type !== "streamer" && " font-semibold text-lg"}
        ${type === "streamer" && " font-medium text-base"}
        
        `}
        >
          {title}
        </h3>
        <h4
          className={`font-Sarabun text-white/70  
        ${type !== "streamer" && " font-semibold text-sm"}
        ${type === "streamer" && " font-normal text-xs"}
        
        `}
        >
          {text}
        </h4>
      </div>
    </div>
  );
};

const CardBG = ({
  type,
  image,
}: {
  type?: "hero" | "base" | "streamer";
  image?: string;
}) => {
  return (
    <div
      className={`w-full h-full  absolute 
      ${type && type === "hero" ? "pt-20" : "pt-0"}
      
      `}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-contain rounded-3xl"
          />
          <div
            className={`absolute w-full  h-full rounded-3xl bg-gradient-to-b from-black/80 via-black/5`}
          />
        </>
      ) : (
        <div
          className={`w-full  h-full rounded-3xl bg-[#050c28] border-white border-x border-y`}
        />
      )}
    </div>
  );
};

//
//
//
