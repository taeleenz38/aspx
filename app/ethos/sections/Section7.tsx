import React from "react";

const Section7 = () => {
  return (
    <div className="min-h-screen text-black pt-36 pb-14 flex flex-col justify-center items-center">
      <h1 className="font-extralight text-7xl">
        Working <span className="italic">With</span> the Artist, Not{" "}
        <span className="italic">off of</span> Them
      </h1>
      <div className="text-4xl text-center w-3/4 font-extralight mt-6">
        <p>
          Narrowing the ratio to success through curated support, answering the
          naturally complex questions of artistic development.
        </p>
        <p>Not one size fits all but rather all fits to one size.</p>
      </div>
      <div className="flex justify-center items-center font-extralight mt-14 h-auto w-full">
        <div className="flex flex-col items-center gap-y-6 w-120 pl-32">
          <p className="text-7xl">Corporation</p>
          <p className="text-7xl font-normal">{">"}</p>
          <p className="text-7xl">Artist</p>
        </div>
        {/* Vertical Divider */}
        <div className="w-1 bg-black h-90 mx-24" />{" "}
        <p className="text-7xl w-120">Artist = Partner</p>
      </div>
    </div>
  );
};

export default Section7;
