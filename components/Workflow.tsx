"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

const Workflow = () => {
  return (
    <section id="workflow" className="w-full py-10 bg-black relative overflow-hidden">
<h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 mb-10 relative z-10">
  My <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-400">Workflow</span>
</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full px-6 relative z-10">
        <HoverBorderGradient className="w-full">
          <Card
            title="Planning & Learning"
            icon={<AceternityIcon order="Step 1" />}
            des="We'll start by discussing your website's goals and what you want to achieve. 
            This includes understanding target audience and planning the site's structure."
          />
        </HoverBorderGradient>
        <HoverBorderGradient className="w-full">
          <Card
            title="Coding & Building"
            icon={<AceternityIcon order="Step 2" />}
            des="Once the plan is set, I'll begin coding the website. I'll keep you updated 
            with regular progress reports and make adjustments based on your feedback."
          />
        </HoverBorderGradient>
        <HoverBorderGradient className="w-full">
          <Card
            title="Testing & Launch"
            icon={<AceternityIcon order="Step 3" />}
            des="After development, I'll test the website to ensure everything works smoothly. 
            Then, we'll launch your site and make it live for the world to see."
          />
        </HoverBorderGradient>
      </div>
    </section>
  );
};

export default Workflow;

const Card = ({
  title,
  icon,
  des,
  className = '',
}: {
  title: string;
  icon: React.ReactNode;
  des: string;
  className?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ scale: 1 }}
      animate={{ scale: hovered ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`border border-black/[0.2] dark:border-white/[0.2] w-full h-full p-6 lg:p-8 relative rounded-3xl bg-black dark:bg-black-200 text-white shadow-lg ${className}`}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <div className="relative z-20 text-center flex flex-col justify-center items-center h-full">
        <div className="mb-4">{icon}</div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-4 text-white-200">
          {des}
        </p>
      </div>
    </motion.div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <span
        className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full px-2 text-white backdrop-blur-3xl font-bold text-lg"
      >
        {order}
      </span>
    </div>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};