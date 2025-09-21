import React from "react";
import Hope from "../../../../assets/betterhope.jpg";
const Hero = () => {
  return (
    <div className="flex items-center justify-evenly">
      <div>
        <p className="text-4xl my-0 font-bold">
          One <mark>donation</mark>
        </p>
        <p className="text-3xl my-0">
          <br /> A new hope
        </p>
      </div>
      <div>
        <img src={Hope} className="rounded-2xl h-[400px]" alt="" />
      </div>
    </div>
  );
};

export default Hero;
