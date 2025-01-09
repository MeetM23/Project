import React from "react";

const SectionOne = () => {
  return (
    //   about Us
    <section id="about" className="absolute w-full border  border-red-400">
      <div className="w-full bg-white flex flex-col gap-5 h-full px-5 py-5 lg:py-10  ">
        <h1 className="font-made  font-bold text-4xl lg:text-5xl">About Us</h1>
        <p className="font-roboto text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          fugiat placeat, ipsum voluptas incidunt dicta reprehenderit! Officia
          perferendis atque maxime, obcaecati laborum esse libero at aspernatur
          laboriosam, doloremque architecto quia ducimus eum ratione ipsum.
        </p>
      </div>
    </section>
  );
};

export default SectionOne;
