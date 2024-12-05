"use client";
import React from "react";

interface HeroProps {
  img: string;
}

export function Hero({ img }: HeroProps) {
  return (
    <div className="w-full h-auto">
      <img className="w-full" src={img} />
    </div>
  );
}
