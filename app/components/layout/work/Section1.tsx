"use client";

import React from "react";
import { motion as MotionComponent } from "framer-motion";

const Section1 = () => {
  return (
    <div className="min-h-screen w-full text-primary mt-10 flex justify-between items-center gap-10 py-14 pt-8 px-4">
      {/* Left Side - Animate as a group */}
      <MotionComponent.div
        className="w-1/2 h-full flex flex-col items-end justify-center py-24 pr-4"
        initial={{ opacity: 0, x: -75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-7xl mb-20 mt-14">
          Cultivating <span className="font-extralight">Creativity, </span>
        </p>
        <video
          src="/mvs/pretti-vid.mp4"
          className="w-full h-auto object-contain pr-10"
          autoPlay
          preload="auto"
          muted
          loop
        />
      </MotionComponent.div>

      {/* Right Side - Animate as a group */}
      <MotionComponent.div
        className="w-1/2 h-full flex flex-col items-start justify-center py-24 pl-4"
        initial={{ opacity: 0, x: 75 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <video
          src="/mvs/toxic-vid.mp4"
          className="w-full h-auto object-contain pl-10"
          autoPlay
          preload="auto"
          muted
          loop
        />
        <div className="mt-20 mb-14 flex items-start self-start">
          <p className="text-7xl">
            Powering <span className="font-extralight">Possibility. </span>
          </p>
        </div>
      </MotionComponent.div>
    </div>
  );
};

export default Section1;
