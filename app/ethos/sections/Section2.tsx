"use client";
import React from "react";
import { motion as MotionComponent } from "framer-motion";
import { useTypingOnView } from "../../../hooks/useTypingOnView";

const Section2: React.FC = () => {
  const { text: title, containerRef: titleRef } = useTypingOnView(
    "Not a Label or Agency, a Partner in Purpose."
  );
  const { text: subtitle, containerRef: subtitleRef } = useTypingOnView(
    "A holistic, artist-first model for true creative development."
  );

  return (
    <div
      className="min-h-screen text-black flex flex-col justify-between pt-40 pb-24"
    >
      <div className="flex flex-col">
        <h1
          ref={titleRef}
          className="italic font-normal text-7xl mb-4 leading-tight whitespace-pre-wrap"
        >
          {title}
        </h1>
        <p
          ref={subtitleRef}
          className="font-extralight text-5xl whitespace-pre-wrap"
        >
          {subtitle}
        </p>
      </div>
      <div className="w-full flex justify-center">
        <img
          src="/ethos-1.png"
          className="w-180 h-auto object-contain mt-4 mr-28"
          alt="Ethos"
        />
      </div>
      <MotionComponent.p
        className="font-extralight text-5xl text-right origin-center"
        initial={{ opacity: 0, transformOrigin: "center" }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        We don&apos;t sign artists.
        <span className="font-normal ml-4">We Invest in Humans.</span>
      </MotionComponent.p>
    </div>
  );
};

export default Section2;
