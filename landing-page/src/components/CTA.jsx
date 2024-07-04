import React from "react";
import { cta } from "../assets";
import { Element } from "react-scroll";

const CTA = () => {
  return (
    <Element name="cta" className="w-full bg-[#2bb3ff] py-24 ">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <img src={cta} className="w-[650px] mx-auto" alt="Presentation Image" />
        <div className="flex flex-col items-center md:items-start">
          <h1 className="py-2 text-3xl font-semibold">
            Welcome to <span className="text-[#ffffff]">Our</span> Presentation
          </h1>
          <p className="py-2 text-lg text-[#ffffff]">
            Learn about the innovative solutions we provide.
          </p>
          <button
            className="w-full md:w-auto my-4 px-8 py-5 rounded-md bg-[#0075fd] text-white font-bold"
            onClick={() =>
              window.open(
                "https://www.canva.com/design/DAGJnM21mcQ/VHZul6l3XjXjzWaSDHOpQg/edit"
              )
            }
          >
            Watch Now
          </button>
        </div>
      </div>
    </Element>
  );
};

export default CTA;
