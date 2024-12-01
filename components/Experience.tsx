import React from "react";
import { experience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="py-10 w-full text-white">
      <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 mb-10 relative z-10">
        My{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-400">
          Experience
        </span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {experience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="2rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex flex-col md:flex-row bg-neutral-900 rounded-xl p-6 shadow-lg transition-shadow duration-300 items-center"
            aria-label={`Experience in ${card.title}`}
          >
            <div className="flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24">
              <FaLaptopCode className="text-white text-2xl lg:text-4xl" />
            </div>
            <div className="ml-0 mt-4 md:ml-6 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="text-gray-400 mt-2">{card.desc}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
