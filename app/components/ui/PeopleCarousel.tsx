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
import peopleData from "../data/PeoplesData";

interface Props {
  activeCategory: string;
}

interface Person {
  name: string;
  title: string;
  headshot: string;
  category: string[];
}

const PeopleCarousel: React.FC<Props> = ({ activeCategory }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  const filteredPeople: Person[] =
    activeCategory === "All"
      ? peopleData
      : peopleData.filter((person: Person) =>
          person.category
            .map((c: string) => c.toLowerCase())
            .includes(activeCategory.toLowerCase())
        );

  return (
    <div className="h-5/6 flex flex-col">
      <Carousel className="w-full h-full hover:cursor-grab flex" ref={ref}>
        <CarouselContent className="-ml-4 h-full">
          {filteredPeople.map((person: Person, index: number) => (
            <CarouselItem
              key={index}
              className={`h-full ${
                filteredPeople.length === 1
                  ? "basis-full"
                  : "lg:basis-1/2 xl:basis-1/3"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="w-full flex flex-col"
              >
                <div className="xl:h-full overflow-hidden mb-4 rounded-xl shadow">
                  <img
                    src={person.headshot}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-2xl font-semibold text-center">
                  {person.name}
                </p>
                <p className="text-lg text-center font-light px-4 mt-1">
                  {person.title}
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
