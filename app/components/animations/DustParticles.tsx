"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const DustParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine); // loadFull includes all features
  }, []);

  return (
    <Particles
      id="dust"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#000" },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
          move: {
            direction: "top",
            enable: true,
            outModes: { default: "destroy" },
            speed: 1,
          },
        },
        emitters: {
          position: { x: 50, y: 100 },
          rate: { delay: 0.1, quantity: 5 },
          particles: {
            move: { direction: "top", speed: { min: 0.5, max: 1.5 } },
            size: { value: { min: 1, max: 2 } },
            life: {
              duration: { sync: true, value: 2 },
              count: 1,
            },
          },
        },
      }}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
};

export default DustParticles;
