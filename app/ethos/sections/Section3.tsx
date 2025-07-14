"use client";
import React from "react";
import { motion as m, Variants } from "framer-motion";
import { useTypingOnView } from "../../../hooks/useTypingOnView";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Section3 = () => {
  const { text: header, containerRef } = useTypingOnView(
    "We Don't Follow the Script."
  );

  return (
    <div className="min-h-screen text-black flex flex-col justify-center pt-36 pb-14">
      <h1
        ref={containerRef}
        className="text-7xl text-right font-extralight"
      >
        {header}
      </h1>

      <div className="flex justify-between mt-4 font-extralight">
        {/* Left side */}
        <div className="w-[35%] flex flex-col overflow-visible">
          <m.p
            className="text-black text-5xl mb-4 text-[5.3rem] font-extralight"
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75 }}
          >
            Core values:
          </m.p>

          <div className="w-full">
            <img
              src="/mock-core-values.png"
              className="w-4/5 h-auto object-contain mt-4"
              alt="Core values"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-[65%] flex flex-col justify-end text-right text-5xl gap-3">
          {/* Paragraph: Quality over quantity */}
          <m.p
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-right"
          >
            Quality over quantity.
          </m.p>

          {/* Bullets group 1 */}
          <div className="flex flex-col items-end gap-3">
            {[
              "No cookie-cutter deals.",
              "We fund projects, not trap artists in debt.",
            ].map((text, idx) => (
              <m.div
                key={idx}
                custom={3 - idx} // stagger bottom to top
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUpVariant}
                className="flex items-center justify-end gap-6"
              >
                <span className="w-3 h-3 rounded-full bg-black shrink-0"></span>
                <p className="text-right">{text}</p>
              </m.div>
            ))}
          </div>

          {/* Paragraph: Every artist is unique */}
          <m.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-right"
          >
            Every artist is unique - not a system component.
          </m.p>

          {/* Bullet group 3 */}
          <m.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center justify-end gap-6"
          >
            <span className="w-3 h-3 rounded-full bg-black shrink-0"></span>
            <p className="text-right">
              Creative autonomy isn&apos;t negotiable.
            </p>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
