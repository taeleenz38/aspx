"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";

const dustVariant = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(5px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.2,
      duration: 0.75,
      ease: easeOut,
    },
  }),
};

const Section6 = () => {
  return (
    <div className="min-h-screen text-black flex flex-col justify-center pt-36 pb-14 overflow-hidden">
      <div className="text-7xl">
        <motion.h1
          className="font-extralight mb-3"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={dustVariant}
        >
          Reimagining the deal.
        </motion.h1>
        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={dustVariant}
        >
          - We take the risk, you take the Freedom.
        </motion.h2>
      </div>

      <div className="flex justify-between w-full mt-24">
        <div className="text-4xl font-extralight">
          <p>Our capital backs your vision. Not the other way around.</p>
          <p className="mt-8">
            *Explanation of how our contractual structure benefits artists.*
          </p>
        </div>
        <img
          src="/mock-core-values.png"
          className="w-1/3 h-auto object-contain mt-8"
          alt="Core values"
        />
      </div>
    </div>
  );
};

export default Section6;
