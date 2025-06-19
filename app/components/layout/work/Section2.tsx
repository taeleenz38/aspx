import React from "react";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className="h-screen w-full text-primary flex justify-between gap-10 p-14">
      <div className="w-1/2 h-full flex flex-col py-24">
        <div className="flex">
          <p className="text-7xl mr-8 mb-24 font-extralight">
            For <span className="font-normal">you, </span> For{" "}
            <span className="font-normal">us. </span>
          </p>
        </div>
        <Image
          src="/mock-illustration.png"
          width={690}
          height={690}
          alt="mock statistics image"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col py-44 pl-8">
        <p className="text-7xl mr-8 mb-4 font-extralight">
          What we do & why we do it...
        </p>
        <p className="text-3xl italic font-extralight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel
          voluptatum explicabo culpa officiis ipsum quasi nisi quaerat eveniet
          reprehenderit, cupiditate tenetur quas distinctio a ullam praesentium.
          Nesciunt, autem labore.
        </p>
      </div>
    </div>
  );
};

export default Section2;
