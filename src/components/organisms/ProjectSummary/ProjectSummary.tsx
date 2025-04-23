import { Typography } from "@/components/atoms/Typography/Typography";
import { useState, useRef, useEffect } from "react";

interface ProjectSummaryProps {
  dataPage?: Array<{ objective?: string; achievement?: string }>;
}

export function ProjectSummary({ dataPage }: ProjectSummaryProps) {
  // Si dataPage n'existe pas ou est vide, retourner null
  if (!dataPage || dataPage.length === 0) return null;

  // Trouver l'objectif et l'achievement dans le tableau
  const achievementItem = dataPage.find((item) => item.achievement);

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
      className={`w-[80%] mx-auto mb-36 bg-black/90 rounded-2xl shadow-[0_0_100px_rgba(0,255,255,0.1)] overflow-hidden ${isVisible ? "animate-fade-right animate-delay-300" : "opacity-0"}`}
    >
      <div className="p-8">
        <Typography
          weight="bold"
          marginClassName="mb-4"
          variant="h1"
          animated
          align="center"
        >
          <span className="bg-gradient-to-t from-gray-100 to-blue-700 bg-clip-text text-transparent">
            Bilan du projet
          </span>
        </Typography>
        <div
          className={`bg-black/50 rounded-xl p-6 border border-teal-500/20 shadow-[0_0_15px_#2563eb] ${isVisible ? "animate-fade-up animate-delay-700" : "opacity-0"}`}
        >
          <Typography variant="paragraph" color="lightGray">
            {achievementItem?.achievement || "Aucun bilan spécifié"}
          </Typography>
        </div>
      </div>
    </div>
  );
}
