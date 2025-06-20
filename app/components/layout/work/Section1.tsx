import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="h-screen w-full text-primary mt-10 flex justify-between items-center gap-10 py-14 px-4">
      <div className="w-1/2 h-full flex flex-col items-end justify-center py-24">
        <div className="flex">
          <p className="text-7xl mb-20 mt-14">
            Cultivating <span className="font-extralight">Creativity, </span>
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/mock-statistics.png"
            width={750}
            height={750}
            alt="mock statistics image"
            className="w-full h-auto object-contain pr-10"
          />
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col items-start justify-center py-24">
        <div className="w-full">
          <Image
            src="/mock-video-work.png"
            width={750}
            height={750}
            alt="mock video work image"
            className="w-full h-auto object-contain pl-10"
          />
        </div>
        <div className="mt-20 mb-14 flex items-start self-start">
          <p className="text-7xl">
            Powering <span className="font-extralight">Possibility. </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
