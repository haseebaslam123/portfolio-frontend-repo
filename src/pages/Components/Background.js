import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


const Background = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <div className="background">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 20 },
            size: { value: 16 },
            opacity: {
              value: { min: 0.1, max: 0.8 },
              animation: {
                enable: true,
                speed: 2,
                sync: false,
                destroy: "none",
                startValue: "random"
              }
            },
            move: {
              enable: true,
              speed: 4,
              random: true,
              outModes: "out",
            },
            shape: {
              type: "images",
              images: [
                { src: "/icons/js.png", width: 40, height: 40 },
                { src: "/icons/py.png", width: 40, height: 40 },
                { src: "/icons/an.png", width: 40, height: 40 },
                { src: "/icons/dj.png", width: 40, height: 40 },
                { src: "/icons/b.png", width: 40, height: 40 },
                { src: "/icons/c.png", width: 40, height: 40 },
                { src: "/icons/cp.png", width: 40, height: 40 },
                { src: "/icons/css.png", width: 40, height: 40 },
                { src: "/icons/e.png", width: 40, height: 40 },
                { src: "/icons/ht.png", width: 40, height: 40 },
                { src: "/icons/java.png", width: 40, height: 40 },
                { src: "/icons/js.png", width: 40, height: 40 },
                { src: "/icons/re.png", width: 40, height: 40 },
                { src: "/icons/ts.png", width: 40, height: 40 },
              ],
            },
            rotate: {
              value: { min: 0, max: 360 },
              direction: "random",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
            life: {
              count: 0,
              delay: {
                value: 0,
                sync: false
              },
              duration: {
                value: 0,
                sync: false
              }
            }
          },
        }}
      />
    </div>
  );
};

export default Background;
