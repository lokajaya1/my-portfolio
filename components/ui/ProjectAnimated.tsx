"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";

interface ProjectAnimatedProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  href?: string;
  technologies?: string[];
  className?: string;
  containerClassName?: string;
}

export const ProjectAnimated: React.FC<ProjectAnimatedProps> = ({
  children,
  title,
  description,
  href,
  technologies = [],
  className,
  containerClassName,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative group overflow-hidden rounded-2xl shadow-lg dark:bg-neutral-900 bg-white w-full h-full",
        containerClassName
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
      }}
    >
      {/* Project Thumbnail */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl w-full h-64",
          className
        )}
      >
        {children}

        {/* Overlay Effect */}
        <motion.div
          className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          style={{ zIndex: 1 }}
        />
      </div>

      {/* Project Details */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center relative z-10">
          <h3 className="text-xl font-bold dark:text-neutral-100 text-neutral-800">
            {title}
          </h3>

          {/* Project Links */}
          <div className="flex items-center space-x-2">
            {href && (
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{ zIndex: 2 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover Details */}
      {isHovered && description && (
        <motion.div
          className="absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-center p-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: 1 }}
        >
          <Info className="mb-2" size={32} />
          <p className="text-sm">{description}</p>
        </motion.div>
      )}
    </motion.div>
  );
};
