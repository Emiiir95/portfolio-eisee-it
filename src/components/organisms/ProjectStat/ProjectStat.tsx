import { Typography } from "@/components/atoms/Typography/Typography";
import { useEffect, useRef, useState } from "react";

interface ProjectStatProps {
  stats: { id: number; name: string; value: string }[];
}

export function ProjectStat({ stats }: ProjectStatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quand le composant devient visible dans le viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Une fois que l'élément est visible, on peut arrêter d'observer
          observer.disconnect();
        }
      },
      {
        // Options: le seuil à 0.3 signifie que l'animation se déclenche
        // quand au moins 30% du composant est visible
        threshold: 0.3,
      },
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup observer
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className={`mb-24 ${isVisible ? "animate-fade-left animate-delay-300" : "opacity-0"}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <Typography
              weight="bold"
              marginClassName="mb-4"
              variant="h1"
              animated
            >
              <span className="bg-gradient-to-r from-gray-700 to-gray-100 bg-clip-text text-transparent">
                Pour résumer ce projet
              </span>
            </Typography>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`flex flex-col bg-white/10 p-8 ${isVisible ? `animate-fade-up animate-delay-${(index + 1) * 100}` : "opacity-0"}`}
              >
                <dt className="text-sm/6 font-semibold text-gray-300">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
