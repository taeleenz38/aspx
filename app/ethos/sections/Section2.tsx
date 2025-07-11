import React from "react";

const Section2 = () => {
  return (
    <div className="min-h-screen text-black flex flex-col justify-between pt-40 pb-14">
      <div className="flex flex-col">
        <h1 className="italic font-normal text-7xl mb-4">
          Not a Label or Agency, a Partner in Purpose.
        </h1>
        <p className="font-extralight text-5xl">
          A holistic, artist-first model for true creative development.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <img
          src="/ethos-1.png"
          className="w-180 h-auto object-contain mt-4 mr-28"
        />
      </div>
      <p className="font-extralight text-5xl text-right">
        We don&apos;t sign artists.
        <span className="font-normal ml-4">We Invest in Humans.</span>
      </p>
    </div>
  );
};

export default Section2;
