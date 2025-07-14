"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion as MotionComponent } from "framer-motion";

const TYPING_INTERVAL = 40;

const Section2: React.FC = () => {
  const fullTitle = "Not a Label or Agency, a Partner in Purpose.";
  const fullSubtitle =
    "A holistic, artist-first model for true creative development.";

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let isMounted = true;

    const typeText = (
      fullText: string,
      setText: React.Dispatch<React.SetStateAction<string>>,
      index = 0,
      callback?: () => void
    ) => {
      if (!isMounted) return;

      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        setTimeout(
          () => typeText(fullText, setText, index + 1, callback),
          TYPING_INTERVAL
        );
      } else {
        if (callback) callback();
      }
    };

    typeText(fullTitle, setTitle, 0, () => {
      typeText(fullSubtitle, setSubtitle);
    });

    return () => {
      isMounted = false;
    };
  }, [hasStarted]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-black flex flex-col justify-between pt-40 pb-24"
    >
      <div className="flex flex-col">
        <h1 className="italic font-normal text-7xl mb-4 leading-tight whitespace-pre-wrap">
          {title}
        </h1>
        <p className="font-extralight text-5xl whitespace-pre-wrap">
          {subtitle}
        </p>
      </div>
      <div className="w-full flex justify-center">
        <img
          src="/ethos-1.png"
          className="w-180 h-auto object-contain mt-4 mr-28"
          alt="Ethos"
        />
      </div>
      <MotionComponent.p
        className="font-extralight text-5xl text-right origin-center"
        initial={{ opacity: 0, transformOrigin: "center" }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        We don&apos;t sign artists.
        <span className="font-normal ml-4">We Invest in Humans.</span>
      </MotionComponent.p>
    </div>
  );
};

export default Section2;
