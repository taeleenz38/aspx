"use client";
import React from "react";
import Button from "./Button";

const portfolioCategories = [
  // "Talent",
  //   "Artists",
  "All",
  "Talent",
  "Designers",
  "Creators",
  "Photographers",
  "Videographers",
  // "Support",
  "Leadership",
  "Producers",
];

interface Props {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const PeopleSideBar: React.FC<Props> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="mt-48 self-start flex flex-col font-extralight text-2xl text-right">
      {portfolioCategories.map((category, index) => (
        <Button
          key={index}
          text={category}
          onClick={() => setActiveCategory(category)}
          className={`mb-2 ${
            category === activeCategory
              ? "underline underline-offset-[10px]"
              : ""
          }`}
          isActive={category === activeCategory}
        />
      ))}
    </div>
  );
};

export default PeopleSideBar;
