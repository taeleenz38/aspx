"use client";
import React, { useState } from "react";
import Button from "./Button";

const portfolioCategories = [
  "All",
  "Development",
  "Artists",
  "Designers",
  "Creators",
  "Photographers",
  "Videographers",
  "Production",
  "Music Videos",
  "Social Content",
  "Campaigns",
  "Editorials",
  "Publications",
  "Manufacturing",
];

const ProjectsSideBar = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  return (
    <div className="sticky mt-36 top-44 self-start flex flex-col font-extralight text-2xl text-right">
      {portfolioCategories.map((category, index) => (
        <Button
          key={index}
          text={category}
          onClick={() => {
            console.log(`Clicked: ${category}`);
            setActiveCategory(category);
          }}
          className={`mb-2 ${
            index === 0 ? "underline underline-offset-[10px]" : ""
          }`}
          isActive={category === activeCategory}
        />
      ))}
    </div>
  );
};

export default ProjectsSideBar;
