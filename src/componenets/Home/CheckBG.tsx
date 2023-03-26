import React from "react";

const CheckBG = () => {
  return (
    <>
      <div className="absolute w-full h-1/2 top-0  bg-gradient-to-t from-[#00092a]"></div>
      <div className="absolute w-full h-1/2 bottom-0 flex flex-col bg-[#00092a]">
        <Row i={4} />
        <Row i={1} />
        <Row i={3} />
      </div>
    </>
  );
};

export default CheckBG;

const Row = ({ i }: { i: number }) => {
  return (
    <div className="w-full h-1/3  bg-[#071030] first:bg-transparent first:bg-gradient-to-t   first:from-[#071030]  grid grid-cols-9 gap-px overflow-x-hidden pb-px group flex-nowrap">
      {["", "", "", "", "", "", "", "", ""].map((item, k) => (
        <SingleCheck key={k} rand={i} index={k} />
      ))}
    </div>
  );
};

const SingleCheck = ({ rand, index }: { rand: number; index: number }) => {
  return (
    <div
      className={`${
        rand === index
          ? "bg-[#081130] group-first:from-[#081130] group-first:bg-transparent "
          : "bg-[#00092a]"
      }  w-full h-full group-first:bg-transparent group-first:bg-gradient-to-t   group-first:from-[#00092a] group-first:to-[#00092a]`}
    />
  );
};
