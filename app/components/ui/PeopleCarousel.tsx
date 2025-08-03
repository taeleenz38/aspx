"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Props {
  activeCategory: string;
}

interface Person {
  name: string;
  title: string;
  image_url: string;
  category: string[];
}

const PeopleCarousel: React.FC<Props> = ({ activeCategory }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [peopleData, setPeopleData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/people");
        if (!response.ok) {
          throw new Error("Failed to fetch people data");
        }
        const data = await response.json();
        setPeopleData(data);
      } catch (error) {
        console.error("Error fetching people data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPeople();
  }, []);

  const filteredPeople: Person[] =
    activeCategory === "All"
      ? peopleData
      : peopleData.filter((person: Person) =>
          person.category
            .map((c: string) => c.toLowerCase())
            .includes(activeCategory.toLowerCase())
        );

  useEffect(() => {
    if (!isLoading && ref.current && filteredPeople.length > 0) {
      const timeout = setTimeout(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                controls.start((i) => ({
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: i * 0.2 },
                }));
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );

        const elements = ref.current!.querySelectorAll(".carousel-item");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
      }, 650);

      return () => clearTimeout(timeout);
    }
  }, [isLoading, filteredPeople, controls]);

  if (isLoading) {
    return (
      <div className="h-5/6 flex flex-col">
        <Carousel className="w-full h-full flex">
          <CarouselContent className="-ml-4 h-full">
            {[...Array(3)].map((_, index) => (
              <CarouselItem
                key={index}
                className="h-full carousel-item lg:basis-1/2 xl:basis-1/3"
              ></CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  }

  return (
    <div className="h-5/6 flex flex-col">
      <Carousel className="w-full h-full hover:cursor-grab flex" ref={ref}>
        <CarouselContent className="-ml-4 h-full">
          {filteredPeople.map((person: Person, index: number) => (
            <CarouselItem
              key={index}
              className={`h-full carousel-item ${
                filteredPeople.length === 1
                  ? "basis-full"
                  : "lg:basis-1/2 xl:basis-1/3"
              }`}
            >
              <motion.div
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="w-full flex flex-col text-black"
              >
                <div className="h-full overflow-hidden mt-4 md:mt-0 mb-4 rounded-xl shadow">
                  <img
                    src={person.image_url}
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

        <CarouselPrevious className="hidden md:flex hover:cursor-pointer hover:bg-black hover:text-white" />
        <CarouselNext className="hidden md:flex hover:cursor-pointer hover:bg-black hover:text-white" />
      </Carousel>
    </div>
  );
};

export default PeopleCarousel;
