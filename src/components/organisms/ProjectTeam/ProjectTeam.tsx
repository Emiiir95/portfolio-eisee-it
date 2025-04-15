import { useState, useEffect, useRef } from "react";
import { Typography } from "@/components/atoms/Typography/Typography";
import { SnowBall } from "@/components/atoms/SnowBall";

interface SnowBallProps {
  avatar: string;
  name: string;
  job: string;
}

interface ProjectTeamProps {
  teams: SnowBallProps[];
}

export function ProjectTeam({ teams }: ProjectTeamProps) {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={componentRef}
      className="my-24 flex flex-col items-center justify-center"
    >
      <div
        className={`w-full transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        <Typography
          variant="h1"
          align="center"
          weight="bold"
          marginClassName="mb-5"
          animated
        >
          <span className="bg-gradient-to-r from-[#5813C5] to-gray-100 bg-clip-text text-transparent">
            Mon équipe !
          </span>
        </Typography>

        <div className="flex sm:flex-row flex-col justify-center gap-3 items-center">
          {teams.map((items, index) => (
            <div
              key={index}
              className="transition-all duration-700 transform"
              style={{
                transitionDelay: `${200 + index * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              <SnowBall
                avatar={items.avatar}
                name={items.name}
                job={items.job}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
