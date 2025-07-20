"use client";

import React from "react";
import { motion as MotionComponent } from "framer-motion";

const Section2 = () => {
  return (
    <div className="min-h-screen w-full text-primary flex justify-between items-center gap-10 py-14 px-4">
      <div className="w-1/2 h-full flex flex-col items-end py-24">
        <div className="flex self-start">
          <MotionComponent.p
            className="text-7xl mr-8 mb-24 font-extralight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5 }}
          >
            For <span className="font-normal">you, </span> For{" "}
            <span className="font-normal">us. </span>
          </MotionComponent.p>
        </div>
        <div className="w-full">
          <video
            src="/mvs/bottom-vid.MP4"
            className="w-full h-auto object-contain pr-10"
            autoPlay
            preload="auto"
            muted
            loop
          />
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col py-44 pl-8">
        <p className="text-7xl mr-8 mb-4 font-extralight">
          What we do & why we do it...
        </p>
        <p className="text-3xl italic font-extralight mb-2">
          We create to connect — artists, ideas, and audiences.
        </p>
        <p className="text-3xl italic font-extralight mb-2">
          Our work lives at the intersection of culture and expression, telling
          stories that resonate across borders and generations.
        </p>
      </div>
    </div>
  );
};

export default Section2;
