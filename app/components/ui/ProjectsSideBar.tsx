"use client";
import React from "react";
import Button from "./Button";

const portfolioCategories = [
  "All",
  // "Development",
  "Artists",
  // "Designers",
  // "Creators",
  "Photographers",
  "Videographers",
  // "Production",
  // "Music Videos",
  "Social Content",
  // "Campaigns",
  // "Editorials",
  "Publications",
  "Manufacturing",
];

const ProjectsSideBar = ({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) => {
  return (
    <div className="sticky mt-36 top-44 self-start flex flex-col font-extralight text-2xl text-right">
      {portfolioCategories.map((category, index) => (
        <Button
          key={index}
          text={category}
          onClick={() => setActiveCategory(category)}
          className={`mb-2 ${
            category === activeCategory ? "underline underline-offset-[10px]" : ""
          }`}
          isActive={category === activeCategory}
        />
      ))}
    </div>
  );
};

export default ProjectsSideBar;
