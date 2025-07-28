"use client";
import React, { useState } from "react";
import SortToggle from "../../ui/SortToggle";
import Projects from "./Projects";
import ProjectsSideBar from "../../ui/ProjectsSideBar";

const Section3 = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen w-full text-primary flex flex-col md:flex-row justify-between gap-4 py-8 px-4 md:py-14 md:px-4">
      <div className="w-full md:w-[88%] flex flex-col mt-32 md:mt-36">
        <div className="flex justify-between items-center">
          <p className="text-4xl md:text-5xl xl:text-7xl mr-4 md:mr-8 font-extralight mb-4 md:mb-8">Portfolio.</p>
          <button
            className="md:hidden bg-primary text-white px-4 py-2 rounded-md text-lg hover:cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            Categories
          </button>
        </div>
        <div className="flex gap-4 mb-4 md:mb-8">
          <p className="font-extralight underline decoration-1 text-lg md:text-2xl underline-offset-8 md:underline-offset-[12px]">
            Sort
          </p>
          <SortToggle
            sortOrder={sortOrder}
            toggleSortOrder={() =>
              setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
            }
          />
        </div>
        <Projects activeCategory={activeCategory} sortOrder={sortOrder} />
      </div>
      <ProjectsSideBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default Section3;