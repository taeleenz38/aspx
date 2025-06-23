"use client";
import React, { useState } from "react";
import Button from "./Button";

const portfolioCategories = [
  "Talent",
  "Artists",
  "Designers",
  "Creators",
  "Photographers",
  "Videographers",
  "Support",
  "Leadership",
  "Producers",
];

const PeopleSideBar = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  return (
    <div className="mt-48 self-start flex flex-col font-extralight text-2xl text-right">
      {portfolioCategories.map((category, index) => (
        <Button
          key={index}
          text={category}
          onClick={() => {
            console.log(`Clicked: ${category}`);
            setActiveCategory(category);
          }}
          className={`mb-2 ${
            index === 0 ? "underline underline-offset-[10px] font-normal" : ""
          }`}
          isActive={category === activeCategory}
        />
      ))}
    </div>
  );
};

export default PeopleSideBar;
