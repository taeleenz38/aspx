import React from "react";

const Section5 = () => {
  return (
    <div className="h-dvh md:min-h-screen text-black flex flex-col justify-center pt-14 md:pt-36 pb-14">
      <div className="font-extralight text-3xl md:text-5xl lg:text-7xl">
        <h1>Our Individualized Support Model, </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl italic mt-3">building an ecosystem for success.</h2>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        <div className="text-xl md:text-3xl lg:text-4xl font-extralight mt-8 md:mt-24">
          <p>We don&apos;t provide static services. We provide</p>
          <p>needs based solutions.</p>
        </div>
        <img
          src="/mock-core-values.png"
          className="w-1/2 md:w-1/3 h-auto object-contain mt-18 md:mt-8 mr-4 md:mr-32 self-center md:self-start"
          alt="Core values"
        />
      </div>
    </div>
  );
};

export default Section5;
