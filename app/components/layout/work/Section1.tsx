import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="h-screen w-full text-primary mt-10 flex justify-between gap-10 p-14">
      <div className="w-1/2 h-full flex flex-col py-24">
        <div className="flex justify-end items-center">
          <p className="text-7xl mb-14 self-end">
            Cultivating <span className="font-extralight">Creativity, </span>
          </p>
        </div>
        <Image
          src="/mock-statistics.png"
          width={690}
          height={690}
          alt="mock statistics image"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col items-end py-24">
        <Image
          src="/mock-video-work.png"
          width={690}
          height={690}
          alt="mock video work image"
        />
        <div className="h-full mt-14 flex items-center self-start">
          <p className="text-7xl">
            Powering <span className="font-extralight">Possibility. </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
