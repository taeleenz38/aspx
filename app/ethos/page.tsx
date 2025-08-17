import React from "react";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";

const Ethos = () => {
  return (
    <div className="h-screen w-[95%] md:w-[85%] mx-auto overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar">
      <section className="snap-start h-dvh flex items-start">
        <Section1 />
      </section>
      <section className="snap-start h-dvh flex items-start">
        <Section2 />
      </section>
      <section className="snap-start h-dvh flex items-start">
        <Section3 />
      </section>
      <section className="snap-start h-dvh flex items-start">
        <Section4 />
      </section>
      <section className="snap-start h-dvh flex items-start">
        <Section5 />
      </section>
      <section className="snap-start h-dvh flex items-start">
        <Section6 />
      </section>
      <section className="snap-start h-dvh flex items-start">
        <Section7 />
      </section>
      <section className="snap-start min-h-dvh max-h-dvh flex items-start">
        <Section8 />
      </section>
    </div>
  );
};

export default Ethos;
