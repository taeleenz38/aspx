import React from "react";

const Section6 = () => {
  return (
    <div className="min-h-screen text-black pt-36 pb-14">
      <div className="text-7xl">
        <h1 className="font-extralight mb-3">Reimagining the deal.</h1>
        <h2>- We take the risk, you take the Freedom.</h2>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-4xl font-extralight mt-24">
          <p>Our capital backs your vision. Not the other way around.</p>
          <p className="mt-8">
            *Explanation of how our contractual structure benefits artists.*
          </p>
        </div>
        <img
          src="/mock-core-values.png"
          className="w-1/3 h-auto object-contain mt-8"
          alt="Core values"
        />
      </div>
    </div>
  );
};

export default Section6;
