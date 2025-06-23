"use client";

import React from "react";
import { motion as MotionComponent } from "framer-motion";

const Section1 = () => {
  return (
    <div className="min-h-screen w-full text-primary mt-10 flex justify-between items-center gap-10 py-14 px-4">
      <div className="w-1/2 h-full flex flex-col items-end justify-center py-24 pr-4">
        <div className="flex">
          <MotionComponent.p
            className="text-7xl mb-20 mt-14"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Cultivating <span className="font-extralight">Creativity, </span>
          </MotionComponent.p>
        </div>
        <MotionComponent.div
          className="w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <video
            src="https://pub-bafba8bc960643568753b76423dd6724.r2.dev/krazy.mp4"
            className="w-full h-auto object-contain pr-10"
            autoPlay
            muted
            loop
          />
        </MotionComponent.div>
      </div>

      <div className="w-1/2 h-full flex flex-col items-start justify-center py-24 pl-4">
        <MotionComponent.div
          className="w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <video
            src="https://pub-bafba8bc960643568753b76423dd6724.r2.dev/dbf0f9ea-e7ac-4d21-adb2-c9e96720baaa-crush.mp4"
            className="w-full h-auto object-contain pl-10"
            autoPlay
            muted
            loop
          />
        </MotionComponent.div>
        <div className="mt-20 mb-14 flex items-start self-start">
          <MotionComponent.p
            className="text-7xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Powering <span className="font-extralight">Possibility. </span>
          </MotionComponent.p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
