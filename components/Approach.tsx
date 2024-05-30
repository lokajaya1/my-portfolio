"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

const Approach = () => {
  return (
    <section className="w-full py-20 bg-dark-900 relative overflow-hidden">
      <h1 className="text-center text-4xl font-bold text-white mb-10 relative z-10">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full px-6 relative z-10">
        <HoverBorderGradient className="w-full">
          <Card
            title="Planning & Strategy"
            icon={<AceternityIcon order="Phase 1" />}
            des="We'll collaborate to map out your website's goals, target audience, 
            and key functionalities. We'll discuss things like site structure, 
            navigation, and content requirements."
          />
        </HoverBorderGradient>
        <HoverBorderGradient className="w-full">
          <Card
            title="Development & Progress Update"
            icon={<AceternityIcon order="Phase 2" />}
            des="Once we agree on the plan, I cue my lofi playlist and dive into
            coding. From initial sketches to polished code, I keep you updated
            every step of the way."
          />
        </HoverBorderGradient>
        <HoverBorderGradient className="w-full">
          <Card
            title="Development & Launch"
            icon={<AceternityIcon order="Phase 3" />}
            des="This is where the magic happens! Based on the approved design, 
            I'll translate everything into functional code, building your website
            from the ground up."
          />
        </HoverBorderGradient>
      </div>
    </section>
  );
};

export default Approach;

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
      className={`border border-black/[0.2] dark:border-white/[0.2] w-full h-full p-6 lg:p-8 relative rounded-3xl bg-dark-800 text-white shadow-lg ${className}`}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <div className="relative z-20 text-center flex flex-col justify-center items-center h-full">
        <div className="mb-4">{icon}</div>
        <h2 className="dark:text-white text-2xl font-bold">{title}</h2>
        <p className="mt-4" style={{ color: "#E4ECFF" }}>
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
        justify-center rounded-full bg-slate-950 px-3 py-1 text-white backdrop-blur-3xl font-bold text-lg"
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