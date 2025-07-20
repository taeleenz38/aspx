"use client";

import React, { useState } from "react";
import Section1 from "./sections/Section1";
import PeopleSideBar from "../components/ui/PeopleSideBar";

const People = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  return (
    <div className="w-[90%] mx-auto">
      <div className="min-h-screen w-full text-primary flex justify-between gap-4 px-4">
        <Section1 activeCategory={activeCategory} />
        <PeopleSideBar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </div>
  );
};

export default People;
