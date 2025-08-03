"use client";

import React, { useState, useEffect } from "react";
import { motion as MotionComponent } from "framer-motion";
import ProjectsCarousel from "../../ui/ProjectsCarousel";
import Image from "next/image";

interface Project {
  category: string;
  thumbnail: string;
  images?: string[];
  title: string;
  description: string | string[];
  year: string;
  links?: string;
}

const ProjectItem = ({
  thumbnail,
  title,
  description,
  onViewMore,
  links,
}: Project & { onViewMore: () => void }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    if (window.innerWidth < 640) {
      setShowOverlay((prev) => !prev);
    }
  };

  useEffect(() => {
    const hideOverlay = () => setShowOverlay(false);
    window.addEventListener("resize", hideOverlay);
    return () => window.removeEventListener("resize", hideOverlay);
  }, []);

  return (
    <MotionComponent.div
      className="flex flex-col sm:flex-row gap-4 mb-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className="order-2 sm:order-1 w-full sm:w-1/2 relative group shadow-md sm:p-8 p-4"
        onClick={toggleOverlay}
      >
        <Image
          src={thumbnail}
          alt={title}
          width={800}
          height={450}
          className="w-full h-auto aspect-video object-contain"
          priority={false}
        />
        <div
          className={`
            absolute inset-0 flex items-center justify-center
            transition-opacity duration-300
            ${showOverlay ? "opacity-100" : "opacity-0"}
            sm:group-hover:opacity-100
          `}
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 100%)",
          }}
        >
          {links && links[0] !== "noLink" ? (
            <a
              href={links[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl font-extralight hover:scale-105 hover:font-light duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              View Video
            </a>
          ) : (
            <p
              onClick={(e) => {
                e.stopPropagation();
                onViewMore();
              }}
              className="text-white text-2xl font-extralight hover:scale-105 hover:font-light duration-200"
            >
              View More
            </p>
          )}
        </div>
      </div>

      <div className="order-1 sm:order-2 w-full sm:w-1/2 flex flex-col gap-2 sm:pr-10 pr-4 pl-4 sm:pl-0">
        <h2 className="text-md md:text-3xl font-medium m-0 leading-none">
          {title}
        </h2>
        <div className="font-extralight text-sm md:text-xl flex flex-col gap-2">
          {Array.isArray(description) ? (
            description.map((line, idx) => <p key={idx}>{line}</p>)
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </MotionComponent.div>
  );
};

const Projects = ({
  activeCategory,
  sortOrder,
}: {
  activeCategory: string;
  sortOrder: "asc" | "desc";
}) => {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects data");
        }
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((project) =>
          Array.isArray(project.category)
            ? project.category.some(
                (cat: string) =>
                  cat.toLowerCase() === activeCategory.toLowerCase()
              )
            : project.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    return sortOrder === "asc" ? yearA - yearB : yearB - yearA;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {sortedProjects.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectItem
            {...project}
            onViewMore={() => setSelectedImages(project.images ?? null)}
          />
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
