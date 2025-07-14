"use client";

import React from "react";
import { motion as MotionComponent } from "framer-motion";

const Section4 = () => {
  return (
    <div className="min-h-screen text-black  pt-36 pb-14 flex flex-col justify-center items-center">
      <MotionComponent.h1
        className="text-7xl font-extralight text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75 }}
      >
        From seed, to self - we help artists grow.
      </MotionComponent.h1>
      <img
        src="/mock-ethos-2.png"
        className="w-3/4 h-auto object-contain mt-4"
        alt="Core values"
      />
    </div>
  );
};

export default Section4;
