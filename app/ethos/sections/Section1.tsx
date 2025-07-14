"use client";

import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <motion.div
        className="text-black text-[5.3rem] font-extralight leading-tight"
        initial={{
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 0%, transparent 0%)",
        }}
        whileInView={{
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 100%, transparent 100%)",
        }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
        }}
      >
        A <span className="font-normal">New Aspect</span> to{" "}
        <span className="bg-gradient-to-r from-black via-black/10 to-black/8 bg-clip-text text-transparent">
          Creative Development
        </span>
      </motion.div>
    </div>
  );
};

export default Section1;
