import React from "react";
import { cta } from "../assets";
import { Element } from "react-scroll";

const CTA = () => {
  return (
    <Element name="cta" className="w-full bg-[#2bb3ff] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center px-4 md:px-0">
        <img src={cta} className="w-[650px] mx-auto" alt="CTA Image" />
        <div>
          <h1 className="py-2 text-3xl font-semibold">
            Join <span className="text-[#ffffff]">Our</span> learning platform
            today
          </h1>
          <p className="py-2 text-lg text-[#ffffff]">
            We are here to help you continue to learn.
          </p>
          <button className="max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#0075fd] text-white font-bold">
            Let's Get Started
          </button>
        </div>
      </div>
    </Element>
  );
};

export default CTA;
