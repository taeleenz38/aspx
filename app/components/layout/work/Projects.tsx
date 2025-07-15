"use client";

import React, { useState } from "react";
import { motion as MotionComponent } from "framer-motion";
import ProjectsCarousel from "../../ui/ProjectsCarousel";
import projectData from "../../data/ProjectsData";
import Image from "next/image";

const ProjectItem = ({
  thumbnail,
  title,
  description,
  onViewMore,
  url,
}: (typeof projectData)[0] & { onViewMore: () => void }) => (
  <MotionComponent.div
    className="flex gap-4 mb-14"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className="w-1/2 relative group shadow-md p-8">
      <Image
        src={thumbnail}
        alt={title}
        width={800} // adjust based on your layout
        height={450} // maintain aspect ratio
        className="w-full h-auto aspect-video object-contain"
        priority={false} // use true for images above the fold
      />
      <div
        className="h-1/2 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-end flex items-center justify-center"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 100%)",
        }}
      >
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl font-extralight hover:cursor-pointer hover:scale-105 hover:font-light duration-200"
          >
            View Video
          </a>
        ) : (
          <p
            onClick={onViewMore}
            className="text-white text-2xl font-extralight hover:cursor-pointer hover:scale-105 hover:font-light duration-200"
          >
            View More
          </p>
        )}
      </div>
    </div>

    <div className="w-1/2 flex flex-col gap-2 pr-10">
      <h2 className="text-3xl font-medium m-0 leading-none">{title}</h2>
      <div className="font-extralight text-xl flex flex-col gap-2">
        {Array.isArray(description) ? (
          description.map((line, idx) => <p key={idx}>{line}</p>)
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  </MotionComponent.div>
);

const Projects = ({
  activeCategory,
  sortOrder,
}: {
  activeCategory: string;
  sortOrder: "asc" | "desc";
}) => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  // Filter by category
  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase()
        );

  // Sort by year
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    return sortOrder === "asc" ? yearA - yearB : yearB - yearA;
  });

  return (
    <>
      {sortedProjects.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectItem
            {...project}
            onViewMore={() => setSelectedImages(project.images ?? null)}
          />
          {index < sortedProjects.length - 1}
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
