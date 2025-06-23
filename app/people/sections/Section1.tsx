"use client";

import React from "react";
import { motion as MotionComponent } from "framer-motion";
import PeopleCarousel from "@/app/components/ui/PeopleCarousel";

const Section1 = () => {
  return (
    <div className="h-screen w-[88%] text-primary gap-10 py-24 px-4">
      <div className="h-full flex flex-col py-14">
        <div className="flex mb-14">
          <MotionComponent.p
            className="text-7xl font-extralight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5 }}
          >
            This is <span className="font-normal">Us.</span>
          </MotionComponent.p>
        </div>
        <PeopleCarousel />
      </div>
    </div>
  );
};

export default Section1;
