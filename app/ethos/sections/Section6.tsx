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
      duration: 0.5,
      ease: easeOut,
    },
  }),
};

const Section6 = () => {
  return (
    <div className="h-dvh md:min-h-screen text-black flex flex-col justify-center pt-28 md:pt-36 pb-14 overflow-hidden">
      <div className="text-3xl md:text-5xl lg:text-7xl">
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

      <div className="flex flex-col md:flex-row justify-between w-full mt-8 md:mt-24">
        <motion.div
          className="text-md md:text-3xl lg:text-4xl font-extralight"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={dustVariant}
        >
          <p>Our capital backs your vision. Not the other way around.</p>
          <p className="mt-4 md:mt-8">
            *Explanation of how our contractual structure benefits artists.*
          </p>
        </motion.div>
        <img
          src="/mock-core-values.png"
          className="w-1/3 h-auto object-contain mt-8 self-center md:self-start"
          alt="Core values"
        />
      </div>
    </div>
  );
};

export default Section6;
