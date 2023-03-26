import React from "react";

import MainContent from "./MainContent";
import Background from "./Background";

const Footer = () => {
  return (
    <div className="relative w-full h-[700px]   flex justify-center mt-20">
      <Background />

      <MainContent />
    </div>
  );
};

export default Footer;
