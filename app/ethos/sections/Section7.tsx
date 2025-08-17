"use client";
import React from "react";
import { motion as MotionComponent } from "framer-motion";

const Section7 = () => {
  return (
    <div className="w-full h-full text-black pt-24 md:pt-36 pb-14 flex flex-col justify-center items-center">
      <MotionComponent.h1
        className="font-extralight text-3xl md:text-5xl lg:text-7xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75 }}
      >
        Working <span className="italic">With</span> the Artist, Not{" "}
        <span className="italic">off of</span> Them
      </MotionComponent.h1>
      <MotionComponent.div
        className="text-xl md:text-3xl lg:text-4xl text-center w-5/6 md:w-3/4 font-extralight mt-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        <p>
          Narrowing the ratio to success through curated support, answering the
          naturally complex questions of artistic development.
        </p>
        <p>Not one size fits all but rather all fits to one size.</p>
      </MotionComponent.div>
      <MotionComponent.div
        className="flex justify-center items-center font-extralight mt-14 h-auto w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        <div className="flex flex-col items-center gap-y-2 md:gap-y-6 w-40 md:w-120 md:pl-32">
          <p className="text-2xl md:text-5xl lg:text-7xl">Corporation</p>
          <p className="text-2xl md:text-5xl lg:text-7xl font-normal">{">"}</p>
          <p className="text-2xl md:text-5xl lg:text-7xl">Artist</p>
        </div>
        {/* Vertical Divider */}
        <div className="w-1 bg-black h-40 md:h-90 mx-8 md:mx-24" />{" "}
        <p className="text-2xl md:text-5xl lg:text-7xl w-40 md:w-120">
          Artist = Partner
        </p>
      </MotionComponent.div>
    </div>
  );
};

export default Section7;
