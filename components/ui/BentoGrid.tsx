import Image from "next/image";
import { cn } from "@/lib/utils";
import GridGlobe from "./GridGlobe";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:grid-row-3 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(10, 10, 10)",
        backgroundImage: "linear-gradient(135deg, rgba(10, 10, 10, 1) 0%, rgba(30, 30, 30, 1) 100%)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Image Section */}
      <div className="w-full h-full absolute overflow-hidden">
        {img && (
          <Image
            src={img}
            alt="Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={cn(imgClassName, "transition-transform duration-500 group-hover:scale-110")}
          />
        )}
        {spareImg && (
          <Image
            src={spareImg}
            alt="Spare Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={cn(imgClassName, "transition-transform duration-500 group-hover:scale-110")}
          />
        )}
      </div>

      {/* Content Section */}
      <div
        className={cn(
          titleClassName,
          "group-hover:translate-x-2 transition duration-200 relative z-10 md:h-full min-h-40 flex flex-col p-5 lg:p-10"
        )}
      >
        {description && (
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-neutral-300">
            {description}
          </div>
        )}
        <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold text-neutral-100">
          {title}
        </div>

        {id === 2 && <GridGlobe />}
      </div>
    </div>
  );
};