import React from "react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: ["#ff00ff", "#00ffff", "#ffffff"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;