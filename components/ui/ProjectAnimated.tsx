"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const ProjectAnimated = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative z-50 cursor-pointer overflow-hidden group rounded-lg p-8",
        containerClassName
      )}
    >
      <div
        className={cn(
          "relative border border-dark-100 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl",
          className
        )}
        style={{ transition: "filter 0.3s ease" }}
      >
        {children}
      </div>
      <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-5 rounded-lg" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <h2
            className="text-lg sm:text-xl font-bold mb-2 shadow-2xl"
            style={{ textShadow: "0 0 20px black" }}
          >
            {title}
          </h2>
          <p
            className="text-xs sm:text-sm shadow-2xl"
          >
            Click to visit
          </p>
        </a>
      </div>
      <style jsx>{`
        .group:hover > div:first-child {
          filter: blur(2px);
        }
      `}</style>
    </div>
  );
};