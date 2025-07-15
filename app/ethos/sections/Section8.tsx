"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { easeInOut } from "framer-motion";

const wordReveal = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.4,
    },
  }),
};

const fadeInMiddle = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 1.2,
      ease: easeInOut, // Use the imported function
    },
  },
};

const fadeInBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 1.2,
      ease: easeInOut, // Use the imported function
    },
  },
};

const Section8 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const line1 = "Art Grows".split(" ");
  const line2 = "When Artists Do.".split(" ");

  return (
    <div
      ref={ref}
      className="min-h-screen text-black pt-40 pb-14 flex flex-col justify-between overflow-visible"
    >
      {/* Top Heading */}
      <div className="font-normal text-9xl flex flex-col">
        <div className="flex flex-wrap gap-3 mb-3">
          {line1.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={wordReveal}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {line2.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={wordReveal}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Single smooth fade-in from left to right */}

      <motion.h2
        className="font-extralight text-[5rem] mt-10 v"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInMiddle}
      >
        Creative. Financial.{" "}
        <span className="bg-gradient-to-r from-black via-black/10 to-black/8 bg-clip-text text-transparent">
          Motivational. Personal.
        </span>
      </motion.h2>

      {/* Bottom Paragraph */}
      <motion.div
        className="font-extralight text-4xl text-right"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInBottom}
      >
        <p>360 degree support to ensure you achieve your goals.</p>
        <p>and when you win, we all win.</p>
      </motion.div>
    </div>
  );
};

export default Section8;
