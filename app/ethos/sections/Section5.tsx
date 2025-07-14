import React from "react";

const Section5 = () => {
  return (
    <div className="min-h-screen text-black flex flex-col justify-center pt-36 pb-14">
      <div className="font-extralight text-7xl">
        <h1>Our Individualized Support Model, </h1>
        <h2 className="italic mt-3">building an ecosystem for success.</h2>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-4xl font-extralight mt-24">
          <p>We don&apos;t provide static services. We provide</p>
          <p>needs based solutions.</p>
        </div>
        <img
          src="/mock-core-values.png"
          className="w-1/3 h-auto object-contain mt-8 mr-32"
          alt="Core values"
        />
      </div>
    </div>
  );
};

export default Section5;
