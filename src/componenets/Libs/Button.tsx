import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Button = ({
  children,
  onClick,
  type,
  download,
  link,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "1" | "2" | "3";
  download?: "google" | "apple";
  link?: string;
}) => {
  const [buttonLink, setButtonLink] = useState<string>(link || "");
  useEffect(() => {
    if (type === "1" || download === "google") {
      setButtonLink(
        "https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=en&gl=US"
      );
      return;
    }
    if (download === "apple") {
      setButtonLink(
        "https://apps.apple.com/us/app/genshin-impact/id1517783697"
      );
      return;
    }
    setButtonLink(link || "");
  }, [type, download, link]);
  return (
    <Link href={buttonLink} target={buttonLink && "_blank"}>
      <button
        onClick={onClick}
        className={`
      rounded-xl text-base md:text-lg font-semibold
    ${
      (type == "1" || (!type && !download)) &&
      "bg-gradient-to-tr from-[#8db946] to-[#638c22] px-5 py-2  text-white"
    }
    ${
      type == "2" &&
      "border-2 rounded-lg border-[#638c22] px-5 py-2 text-[#638c22]"
    }
    ${
      (type == "3" || download) &&
      "border-2  rounded-lg border-white bg-black px-2 py-2 text-white"
    }
    
    
    `}
      >
        <div
          className={`${
            download ? " flex justify-center items-center gap-1" : "hidden"
          }`}
        >
          <Logo download={download} />
          <div className="flex-1 flex flex-col gap-px items-start">
            <p className="font-medium font-Sarabun text-[9px] leading-[9px]">
              {download === "google" ? "GET IT ON" : "Download on the"}
            </p>
            <h6 className="font-bold font-Sarabun text-lg leading-[18px]">
              {download === "google" ? "Google Play" : "App Store"}
            </h6>
          </div>
        </div>
        {children}
      </button>
    </Link>
  );
};

export default Button;

const Logo = ({ download }: { download?: string }) => {
  return (
    <div className="w-8 h-8 relative">
      <Image
        alt=""
        src={`assets/${
          download === "google" ? "google-play-store-icon" : "apple-icon"
        }.svg`}
        fill
        className="object-contain"
      />
    </div>
  );
};
