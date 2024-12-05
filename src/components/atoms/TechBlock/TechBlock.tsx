import React from "react";
import { Image } from "react-bootstrap";
import { Typography } from "@/components/atoms/Typography/Typography";
import clsx from "clsx";
import { useState } from "react";

export type Tech = {
  titleLogo: string;
  pathLogo: string;
  colorBg: string;
};

type Props = {
  title?: string;
  techs: Tech[];
  size?: "md" | "lg";
};

export const TechBlock = ({ title, techs, size = "lg" }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      {title && (
        <Typography variant="h4" weight="bold" color="lightGray">
          {title}
        </Typography>
      )}
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-5">
        <div className="flex w-fit flex-wrap -space-x-2 overflow-hidden p-3 hover:cursor-pointer">
          {techs?.map((tech, index) => (
            <div
              key={tech.titleLogo}
              className="relative inline-block flex-col items-center rounded-full ring-2 ring-white duration-300 ease-in-out hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={clsx(
                  `rounded-full p-2 backdrop-blur-sm`,
                  tech.colorBg,
                  size === "md" ? "w-10" : "w-16",
                  size === "md" ? "h-10" : "h-16",
                )}
              >
                <Image
                  height={200}
                  width={200}
                  src={tech.pathLogo}
                  alt={tech.titleLogo}
                  className="h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
        {hoveredIndex !== null && (
          <div
            className={clsx(
              `h-fit rounded-md bg-slate-100/80 backdrop-blur-sm md:w-fit`,
              size === "md" ? `py-1 px-2` : `py-2 px-4`,
            )}
          >
            <Typography
              key={techs[hoveredIndex].titleLogo}
              align="center"
              variant="h5"
              weight="bold"
              color="primary"
            >
              {techs[hoveredIndex].titleLogo}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};
