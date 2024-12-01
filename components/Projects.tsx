"use client";

import React from "react";
import Image from "next/legacy/image";
import { projects } from "@/data";
import { ProjectAnimated } from "./ui/ProjectAnimated";

const Projects = () => {
  return (
    <div id="projects" className="py-12 px-8">
      <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 mb-10 relative z-10">
        My{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-400">
          Projects
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((item) => (
          <div key={item.id} className="flex justify-center">
            <ProjectAnimated
              title={item.title}
              href={item.link}
              description={item.des}
            >
              <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden w-full h-full">
                <div className="relative w-full h-64">
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover" // Ensures the image fills the card while maintaining aspect ratio
                    className="absolute inset-0 object-cover rounded-t-lg" // Cover the entire div
                  />
                </div>
              </div>
            </ProjectAnimated>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
