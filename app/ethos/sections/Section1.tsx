"use client";

import React from "react";
import { motion as MotionComponent } from "framer-motion";

const Section1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <MotionComponent.p
        className="text-black text-[5.3rem] font-extralight"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75 }}
      >
        A <span className="font-normal">New Aspect</span> to{" "}
        <span className="bg-gradient-to-r from-black via-black/10 to-black/8 bg-clip-text text-transparent">
          Creative Development
        </span>
      </MotionComponent.p>
    </div>
  );
};

export default Section1;
