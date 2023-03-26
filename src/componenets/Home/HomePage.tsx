import React from "react";
import Character from "./Character";

import CheckBG from "./CheckBG";
import MainContent from "./MainContent";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen  bg-gradient-to-tr from-[#00092a] via-[#00092a] to-[#000721] flex justify-center">
      <CheckBG />
      <Character />
      <MainContent />
    </div>
  );
};

export default HomePage;
