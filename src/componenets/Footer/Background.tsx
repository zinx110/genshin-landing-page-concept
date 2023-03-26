import React from "react";

const Background = () => {
  return (
    <>
      <div className="absolute w-full h-full opacity-10">
        <div className=" w-full h-full  bg-[url('/assets/footerImage.webp')]"></div>
      </div>
      <div className="absolute w-full h-1/4  bg-gradient-to-t bottom-0 from-black "></div>
    </>
  );
};

export default Background;
