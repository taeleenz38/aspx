"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const mockPeople = [
  {
    img: "/mock-portrait-1.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    img: "/mock-portrait-3.webp",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    img: "/mock-portrait-7.jpeg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    img: "/mock-portrait-8.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    img: "/mock-portrait-9.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

const PeopleCarousel = () => {
  return (
    <Carousel className="w-full h-164 hover:cursor-grab">
      <CarouselContent className="-ml-4 h-full">
        {mockPeople.map((person, index) => (
          <CarouselItem
            key={index}
            className="lg:basis-1/2 xl:basis-1/3 h-full"
          >
            <div className="w-full h-164 overflow-hidden mb-4">
              <img
                src={person.img}
                alt={`Portrait ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <p className="text-md font-extralight text-center px-8">{person.desc}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hover:cursor-pointer" />
      <CarouselNext className="hover:cursor-pointer" />
    </Carousel>
  );
};

export default PeopleCarousel;
