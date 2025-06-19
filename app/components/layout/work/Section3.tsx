"use client"
import React, { useState } from "react";
import Button from "../../ui/Button";

const Section3 = () => {
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

  const [activeCategory, setActiveCategory] = useState<string>("All");

  return (
    <div className="h-screen w-full text-primary flex justify-between gap-10 p-14">
      <div className="w-[85%] mt-28">
        <p className="text-7xl mr-8 font-extralight">Portfolio.</p>
      </div>
      <div className="w-[15%] mt-28 flex flex-col font-extralight text-2xl text-right">
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
    </div>
  );
};

export default Section3;
