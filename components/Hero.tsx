import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-20 -left-0 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-gray-500 max-w-80 mb-4">
            Portfolio Website with Next.js
          </p>

          <h2 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold mb-4 py-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50" style={{ lineHeight: '1.2' }}>
  Turning Concepts into Engaging{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-200 to-purple-400">
    Experience
  </span>
</h2>

          <p className="text-center tracking-wide text-sm md:text-lg lg:text-2xl text-white-200">
            Hello! I&apos;m Lokajaya Andala, exploring the potential of Next.js.
          </p>

          <a href="#projects" aria-label="Show my work">
            <MagicButton
              title="Show my projects"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
