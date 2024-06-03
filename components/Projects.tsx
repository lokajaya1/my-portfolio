"use client";

import React from "react";
import Image from "next/legacy/image";
import { projects } from "@/data"; 
import { ProjectAnimated } from "./ui/ProjectAnimated"; 

const Projects = () => {
  return (
    <div id="projects" className="py-6 px-8">
      <h1 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
  My <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-400">Projects</span>
</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((item) => (
          <div key={item.id} className="flex justify-center">
            <ProjectAnimated title={item.title} href={item.link}>
              <div className="flex flex-col items-center bg-grey-100 rounded-lg shadow-lg overflow-hidden w-full">
                <div className="relative w-full h-48 lg:h-64">
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute w-full h-full"
                  />
                </div>
                <div className="p-4 w-full text-center">
                  <h1 className="font-bold text-xl lg:text-2xl mb-2 text-white-100">
                    {item.title}
                  </h1>
                  <p className="text-white-200 text-sm lg:text-base mb-4">
                    {item.des}
                  </p>
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