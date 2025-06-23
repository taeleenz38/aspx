"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const mockPeople = [
  {
    img: "/mock-portrait-1.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    img: "/mock-portrait-3.webp",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    img: "/mock-portrait-7.jpeg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    img: "/mock-portrait-8.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    img: "/mock-portrait-9.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

const visibleCount = 3;

const PeopleCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 or 1

  const prev = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex((prev) => prev - 1);
    }
  };

  const next = () => {
    if (startIndex < mockPeople.length - visibleCount) {
      setDirection(1);
      setStartIndex((prev) => prev + 1);
    }
  };

  const visiblePeople = mockPeople.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="flex items-center justify-center gap-14 w-full">
      {/* Left arrow */}
      <button
        onClick={prev}
        disabled={startIndex === 0}
        className="p-4 rounded-full border border-black-300 hover:bg-black hover:text-white hover:cursor-pointer duration-200 disabled:opacity-0 disabled:cursor-not-allowed"
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Slide Container */}
      <div className="relative flex w-4/5 h-full overflow-hidden gap-10">
        <AnimatePresence initial={false} custom={direction}>
          {visiblePeople.map((person, index) => (
            <motion.div
              key={person.img}
              className="w-1/3 flex flex-col text-center"
              layout
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              custom={direction}
            >
              <div className="w-full h-156 overflow-hidden mb-4">
                <img
                  src={person.img}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  alt={`Portrait ${index}`}
                />
              </div>
              <p className="font-extralight text-xl">{person.desc}</p>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Entering card animation */}
        <AnimatePresence>
          {direction === 1 && startIndex + visibleCount < mockPeople.length && (
            <motion.div
              key={"next"}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 right-[-33.333%] w-1/3 flex flex-col text-center"
            >
              <div className="w-full h-156 overflow-hidden mb-4">
                <img
                  src={mockPeople[startIndex + visibleCount]?.img}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  alt="Next portrait"
                />
              </div>
              <p className="font-extralight text-xl">
                {mockPeople[startIndex + visibleCount]?.desc}
              </p>
            </motion.div>
          )}

          {direction === -1 && startIndex > 0 && (
            <motion.div
              key={"prev"}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-0 left-[-33.333%] w-1/3 flex flex-col text-center"
            >
              <div className="w-full h-156 overflow-hidden mb-4">
                <img
                  src={mockPeople[startIndex - 1]?.img}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  alt="Previous portrait"
                />
              </div>
              <p className="font-extralight text-xl">
                {mockPeople[startIndex - 1]?.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right arrow */}
      <button
        onClick={next}
        disabled={startIndex === mockPeople.length - visibleCount}
        className="p-4 rounded-full border border-black-300 hover:bg-black hover:text-white hover:cursor-pointer duration-200 disabled:opacity-0 disabled:cursor-not-allowed"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default PeopleCarousel;
