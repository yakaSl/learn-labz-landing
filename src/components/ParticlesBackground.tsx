import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }} // ← required!
        options={{
          fullScreen: { enable: false },
          background: { color: "#ffffff" },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                links: { opacity: 1 },
              },
            },
          },
          particles: {
            color: { value: "#004c4c" },
            links: {
              enable: true,
              color: "#15ae89",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
              outModes: { default: "bounce" },
            },
            number: { value: 60 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
