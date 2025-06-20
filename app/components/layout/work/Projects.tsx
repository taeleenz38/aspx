import React from "react";

const projectData = [
  {
    image: "/mock-project-3.jpg",
    title: "Title 1",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
    culpa neque pariatur quasi recusandae, sapiente aut! Et earum quod
    autem dicta, debitis fuga fugiat iusto ab voluptate iste tenetur
    dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Totam pariatur atque minima quos possimus eligendi, cumque facilis
    dicta numquam quaerat nemo odio officiis dolores quia beatae illo
    quibusdam soluta vero?`,
  },
  {
    image: "/mock-project-2.png",
    title: "Title 2",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
    culpa neque pariatur quasi recusandae, sapiente aut! Et earum quod
    autem dicta, debitis fuga fugiat iusto ab voluptate iste tenetur
    dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Totam pariatur atque minima quos possimus eligendi, cumque facilis
    dicta numquam quaerat nemo odio officiis dolores quia beatae illo
    quibusdam soluta vero?`,
  },
  {
    image: "/mock-project-1.jpg",
    title: "Title 3",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
    culpa neque pariatur quasi recusandae, sapiente aut! Et earum quod
    autem dicta, debitis fuga fugiat iusto ab voluptate iste tenetur
    dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Totam pariatur atque minima quos possimus eligendi, cumque facilis
    dicta numquam quaerat nemo odio officiis dolores quia beatae illo
    quibusdam soluta vero?`,
  },
];

const Divider = () => (
  <div className="w-1/2 flex justify-center">
    <span className="w-2 h-24 bg-black" />
  </div>
);

const ProjectItem = ({
  image,
  title,
  description,
}: (typeof projectData)[0]) => (
  <div className="flex gap-4">
    {/* Image Container */}
    <div className="w-1/2 relative group overflow-hidden">
      <img src={image} className="w-full h-auto object-contain" alt={title} />

      {/* Custom Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0) 65%)",
        }}
      >
        <p className="text-white text-2xl font-extralight mb-16 hover:cursor-pointer hover:font-light duration-200">
          View More
        </p>
      </div>
    </div>

    {/* Text Content */}
    <div className="w-1/2 flex flex-col gap-2 pr-10">
      <h2 className="text-3xl font-medium m-0 leading-none">{title}</h2>
      <p className="font-extralight text-xl">{description}</p>
    </div>
  </div>
);

const Projects = () => {
  return (
    <>
      {projectData.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectItem {...project} />
          {index < projectData.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  );
};

export default Projects;
