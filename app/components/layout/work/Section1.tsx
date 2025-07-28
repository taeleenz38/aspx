"use client";

import React from "react";
import { motion as MotionComponent } from "framer-motion";

const Section1 = () => {
  return (
    <div className="min-h-screen w-full text-primary mt-8 flex flex-col md:flex-row md:justify-between items-center gap-6 py-8 px-4 md:py-14 md:pt-8 md:px-4">
      {/* Left Side - Animate as a group */}
      <MotionComponent.div
        className="w-full md:w-1/2 h-full flex flex-col items-center md:items-end justify-center pt-14 pb-6 md:py-24 md:pr-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-4xl md:text-5xl xl:text-7xl mb-8 md:mb-20 mt-8 md:mt-14">
          Cultivating <span className="font-extralight">Creativity, </span>
        </p>
        <video
          src="/pretti-vid.mp4"
          className="w-full max-w-full h-auto object-contain px-0 md:pr-10"
          autoPlay
          preload="auto"
          muted
          loop
        />
      </MotionComponent.div>

      {/* Right Side - Animate as a group */}
      <MotionComponent.div
        className="w-full md:w-1/2 h-full flex flex-col items-center md:items-start justify-center md:py-24 md:pl-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <video
          src="/pretti-vid.mp4"
          className="w-full max-w-full h-auto object-contain px-0 md:pl-10"
          autoPlay
          preload="auto"
          muted
          loop
        />
        <div className="mt-8 md:mt-20 mb-8 md:mb-14 flex self-center md:items-start md:self-start">
          <p className="text-4xl md:text-5xl xl:text-7xl">
            Powering <span className="font-extralight">Possibility. </span>
          </p>
        </div>
      </MotionComponent.div>
    </div>
  );
};

export default Section1;
