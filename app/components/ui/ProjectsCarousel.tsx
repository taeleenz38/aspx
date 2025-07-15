"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectsCarouselProps {
  images: string[];
  onClose: () => void;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
  images,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl w-4/5 max-h-[90vh] flex flex-col items-center p-18"
      >
        <Carousel className="w-full h-full flex">
          <CarouselContent className="-ml-4 h-full">
            {images.map((src, idx) => (
              <CarouselItem
                key={idx}
                className="basis-1 lg:basis-1/2 pl-4 flex items-center justify-center"
              >
                <div className="aspect-square w-full max-h-[60vh] relative">
                  <Image
                    src={src}
                    alt={`Project Image ${idx + 1}`}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hover:cursor-pointer hover:bg-black hover:text-white" />
          <CarouselNext className="hover:cursor-pointer hover:bg-black hover:text-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
