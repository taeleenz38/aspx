"use client";

import React, { useState } from "react";
import Section1 from "./sections/Section1";
import PeopleSideBar from "../components/ui/PeopleSideBar";

const People = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-[98%] md:w-[90%] mx-auto">
      <div className="min-h-screen w-full text-primary flex justify-between gap-4 px-4 relative">
        <Section1
          activeCategory={activeCategory}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <PeopleSideBar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};

export default People;
