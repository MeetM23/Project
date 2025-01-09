import React from "react";
import { img } from "../constants";

const Hero = () => {
  return (
    <section className="">
      <div className=" top-0 p-1 ">
        <img src={img.hero} alt="" className="relative rounded-md" />
        <h1 className="absolute bottom-5 lg:bottom-10 left-5 lg:left-10 lg:leading-[60px] font-made text-white font-bold lg:text-5xl text-lg">
          Lorem ipsum dolor sit amet <br />
          consectetur adipisicing elit. Repellat fuga
        </h1>
      </div>
    </section>
  );
};

export default Hero;
