"use client";

import React from "react";
import { motion as MotionComponent } from "framer-motion";

const Section2 = () => {
  return (
    <div className="md:min-h-screen w-full text-primary flex flex-col md:flex-row md:justify-between items-center gap-6 py-8 px-4 md:py-14 md:px-4">
      <div className="w-full md:w-1/2 h-full flex flex-col items-center md:items-end pt-8 pb-2 md:py-24">
        <div className="flex self-start">
          <MotionComponent.p
            className="text-5xl xl:text-7xl mr-4 md:mr-8 mb-8 md:mb-24 font-extralight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            For <span className="font-normal">you, </span> For{" "}
            <span className="font-normal">us. </span>
          </MotionComponent.p>
        </div>
        <div className="w-full">
          <video
            src="https://pub-bafba8bc960643568753b76423dd6724.r2.dev/5f3a0832-5d94-4614-9dbd-323e75b75072-bottom-vid.mp4"
            className="w-full max-w-full h-auto object-contain px-0 md:pr-10"
            autoPlay
            preload="auto"
            muted
            loop
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col pb-8 md:py-44 md:mb-14 px-0 md:pl-8">
        <p className="text-3xl md:text-5xl xl:text-7xl mr-4 md:mr-8 mb-4 md:mb-8 font-extralight">
          What we do & why we do it...
        </p>
        <p className="text-lg md:text-xl xl:text-3xl italic font-extralight mb-2">
          We create to connect — artists, ideas, and audiences.
        </p>
        <p className="text-lg md:text-xl xl:text-3xl italic font-extralight mb-2">
          Our work lives at the intersection of culture and expression, telling
          stories that resonate across borders and generations.
        </p>
      </div>
    </div>
  );
};

export default Section2;
