"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  {
    img: "/mock-portrait-2.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    img: "/mock-portrait-10.webp",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

const PeopleCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <div className="h-5/6 flex flex-col">
      <Carousel className="w-full h-full hover:cursor-grab flex" ref={ref}>
        <CarouselContent className="-ml-4 h-full">
          {mockPeople.map((person, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/2 xl:basis-1/3 h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="w-full flex flex-col"
              >
                <div className="xl:h-full overflow-hidden mb-4 rounded-xl shadow">
                  <img
                    src={person.img}
                    alt={`Portrait ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-lg font-extralight text-center px-4 mt-4">
                  {person.desc}
                </p>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hover:cursor-pointer hover:bg-black hover:text-white" />
        <CarouselNext className="hover:cursor-pointer hover:bg-black hover:text-white" />
      </Carousel>
    </div>
  );
};

export default PeopleCarousel;
