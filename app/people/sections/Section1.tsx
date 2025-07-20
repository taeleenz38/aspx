"use client";

import React from "react";
import { motion as MotionComponent } from "framer-motion";
import PeopleCarousel from "@/app/components/ui/PeopleCarousel";

interface Props {
  activeCategory: string;
}

const Section1: React.FC<Props> = ({ activeCategory }) => {
  return (
    <div className="h-screen w-[85%] text-primary gap-10 py-24 px-4">
      <div className="h-full flex flex-col pt-14">
        <div className="flex mb-4">
          <MotionComponent.p
            className="text-7xl font-extralight"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75 }}
          >
            This is <span className="font-normal">Us.</span>
          </MotionComponent.p>
        </div>
        <PeopleCarousel activeCategory={activeCategory} />
      </div>
    </div>
  );
};

export default Section1;
