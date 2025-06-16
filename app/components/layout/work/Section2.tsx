import React from "react";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className="h-dvh w-full text-primary mt-10 flex justify-between p-14">
      <div className="w-1/2 h-full flex flex-col justify-between py-20">
        <div className="flex">
          <p className="text-7xl mr-8 mb-14 font-extralight">
            For <span className="font-normal">you, </span> For{" "}
            <span className="font-normal">us. </span>
          </p>
        </div>
        <Image
          src="/mock-illustration.png"
          width={740}
          height={740}
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
