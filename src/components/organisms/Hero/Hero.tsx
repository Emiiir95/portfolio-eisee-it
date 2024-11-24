
"use client";

interface HeroProps {
  img: string
}

export function Hero({img}: HeroProps) {

  return (
        <div className="w-full h-auto">
          <img className="w-full" src={img} />
        </div>
      )}