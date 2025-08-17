"use client";
import React from "react";
import { motion as MotionComponent } from "framer-motion";

const Section5 = () => {
  return (
    <div className="h-dvh md:min-h-screen text-black flex flex-col justify-center pt-24 md:pt-36 pb-14">
      <MotionComponent.div
        className="font-extralight text-3xl md:text-5xl lg:text-7xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75 }}
      >
        <h1>Our Individualized Support Model, </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl italic mt-3">
          building an ecosystem for success.
        </h2>
      </MotionComponent.div>
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        <MotionComponent.div
          className="text-xl md:text-3xl lg:text-4xl font-extralight mt-8 md:mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <p>We don&apos;t provide static services. We provide</p>
          <p>needs based solutions.</p>
        </MotionComponent.div>
        <img
          src="/mock-core-values.png"
          className="w-1/2 md:w-1/3 h-auto object-contain mt-18 md:mt-8 mr-4 md:mr-32 self-center md:self-start"
          alt="Core values"
        />
      </div>
    </div>
  );
};

export default Section5;
