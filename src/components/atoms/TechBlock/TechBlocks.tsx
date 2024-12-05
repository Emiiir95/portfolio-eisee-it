import React from "react";

import { Tech, TechBlock } from "./TechBlock";

export type Techs = {
  title: string;
  items: Tech[];
};

export interface TechBlocksProps {
  limit?: number;
  items: Techs[];
  size?: "md" | "lg";
}

export const TechBlocks: React.FC<TechBlocksProps> = ({
  items,
  size,
  limit,
}) => {
  return (
    <div className="grid w-full gap-3 gap-y-10 md:grid-cols-2">
      {items
        ?.slice(0, limit)
        .map((item, index) => (
          <TechBlock
            key={index}
            size={size}
            title={item.title}
            techs={item.items}
          />
        ))}
    </div>
  );
};
