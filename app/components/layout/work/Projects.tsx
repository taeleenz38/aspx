"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion as MotionComponent } from "framer-motion";
import ProjectsCarousel from "../../ui/ProjectsCarousel";
const projectData = [
  {
    category: "videographers",
    thumbnail: "/mock-project-3.jpg",
    images: [
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
    ],
    title: "Title 1",
    description: "Sample description for videographers...",
  },
  {
    category: "photographers",
    thumbnail: "/mock-project-2.png",
    images: [
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
    ],
    title: "Title 2",
    description: "Sample description for photographers...",
  },
  {
    category: "artists",
    thumbnail: "/mock-project-1.jpg",
    images: [
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
      "/mock-project-1.jpg",
    ],
    title: "Title 3",
    description: "Sample description for artists...",
  },
];

const Divider = () => (
  <div className="w-1/2 flex justify-center">
    <span className="w-2 h-24 bg-black" />
  </div>
);

const ProjectItem = ({
  thumbnail,
  title,
  description,
  onViewMore,
}: (typeof projectData)[0] & { onViewMore: () => void }) => (
  <MotionComponent.div
    className="flex gap-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className="w-1/2 relative group">
      <img
        src={thumbnail}
        className="w-full h-auto object-contain"
        alt={title}
      />
      <div
        className="h-1/2 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-end flex items-center justify-center"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 100%)",
        }}
      >
        <p
          onClick={onViewMore}
          className="text-white text-2xl font-extralight hover:cursor-pointer hover:font-light duration-200"
        >
          View More
        </p>
      </div>
    </div>

    <div className="w-1/2 flex flex-col gap-2 pr-10">
      <h2 className="text-3xl font-medium m-0 leading-none">{title}</h2>
      <p className="font-extralight text-xl">{description}</p>
    </div>
  </MotionComponent.div>
);

const Projects = ({ activeCategory }: { activeCategory: string }) => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <>
      {filteredProjects.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectItem
            {...project}
            onViewMore={() => setSelectedImages(project.images)}
          />
          {index < filteredProjects.length - 1 && <Divider />}
        </React.Fragment>
      ))}

      {selectedImages && (
        <ProjectsCarousel
          images={selectedImages}
          onClose={() => setSelectedImages(null)}
        />
      )}
    </>
  );
};

export default Projects;
