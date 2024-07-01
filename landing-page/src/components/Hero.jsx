import React from "react";
import { header } from "../assets";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="hero" className="w-full bg-white py-24">
      {" "}
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl text-[#4CC3ED] font-medium">
            START TO SUCCESS
          </p>
          <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
            Welcome To <span className="text-[#4CC3ED]">UPLEARN</span>
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Empower your academic journey with our innovative platform for
            seamless learning and collaboration{" "}
          </p>
        </div>
        <img src={header} className="md:order-last  order-first" />
      </div>
    </Element>
  );
};

export default Hero;
