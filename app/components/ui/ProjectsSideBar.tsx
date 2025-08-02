"use client";
import React from "react";
import { motion as MotionComponent } from "framer-motion";
import Button from "./Button";

const portfolioCategories = [
  "All",
  "Artists",
  "Photographers",
  "Videographers",
  "Social Content",
  "Publications",
  "Manufacturing",
];

const ProjectsSideBar = ({
  activeCategory,
  setActiveCategory,
  isOpen,
  setIsOpen,
}: {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      <MotionComponent.div
        className={`fixed inset-0 bg-primary bg-opacity-90 flex flex-col items-center justify-center z-50 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl hover:cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <div className="flex flex-col items-center font-extralight text-lg text-white">
          {portfolioCategories.map((category, index) => (
            <Button
              key={index}
              text={category}
              onClick={() => {
                setActiveCategory(category);
                setIsOpen(false);
              }}
              className={`mb-4 ${
                category === activeCategory ? "underline underline-offset-4" : ""
              }`}
              isActive={category === activeCategory}
            />
          ))}
        </div>
      </MotionComponent.div>

      {/* Desktop Sidebar */}
      <div className="hidden sticky mt-36 top-44 self-start md:flex flex-col font-extralight text-2xl text-right">
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
    </>
  );
};

export default ProjectsSideBar;