import { Typography } from "@/components/atoms/Typography/Typography";
import { useState, useEffect } from "react";

interface Platform {
  name: string;
  image: string;
  scroll?: boolean;
}

interface ProjectProuveProps {
  title: string;
  platforms: Platform[];
}

export const ProjectProuve = ({ title, platforms }: ProjectProuveProps) => {
  const [activePlatform, setActivePlatform] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null,
  );
  const [mounted, setMounted] = useState(false);

  // État pour contrôler l'animation séquentielle des éléments
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Déclencher l'animation d'entrée une fois le composant monté
    setMounted(true);

    // Animation séquentielle
    const animationSequence = [200, 500, 800];
    animationSequence.forEach((delay, index) => {
      setTimeout(() => {
        setAnimationStage(index + 1);
      }, delay);
    });
  }, []);

  const handlePlatformChange = (index: number) => {
    if (index > activePlatform) {
      setSlideDirection("right");
    } else {
      setSlideDirection("left");
    }
    setActivePlatform(index);
  };

  return (
    <div
      className={`w-[80%] mb-24 mx-auto bg-black p-8 rounded-2xl shadow-[0_0_100px_rgba(0,255,255,0.1)] transition-all duration-700 ease-in-out transform ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {/* En-tête avec animation séquentielle */}
      <div className="mb-8 text-center">
        <div
          className={`transition-all duration-700 delay-200 transform ${
            animationStage >= 1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Typography
            weight="bold"
            marginClassName="mb-4"
            variant="h1"
            animated
          >
            <span className="bg-gradient-to-r from-cyan-500 to-teal-100 bg-clip-text text-transparent">
              {title}
            </span>
          </Typography>
        </div>

        <div
          className={`flex items-center justify-center gap-3 flex-wrap transition-all duration-700 delay-400 transform ${
            animationStage >= 2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {platforms.map((platform, index) => (
            <button
              key={index}
              onClick={() => handlePlatformChange(index)}
              className={`px-4 py-1 rounded-full text-sm flex items-center gap-2 transition-all duration-300 ${
                index === activePlatform
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {platform.name}
            </button>
          ))}
        </div>
      </div>

      {/* Zone de preuve avec animation */}
      <div
        className={`relative group overflow-hidden transition-all duration-700 delay-600 transform ${
          animationStage >= 3 ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="relative bg-black rounded-lg overflow-hidden">
          {/* Effet de brillance animé sur le contour */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 rounded-lg opacity-30 blur-sm group-hover:opacity-70 transition-opacity duration-700 animate-gradient-shift"></div>

          <div className="relative bg-black rounded-lg overflow-hidden p-0.5">
            <div className="aspect-video w-full relative overflow-hidden rounded-md bg-gray-950">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                    index === activePlatform
                      ? "translate-x-0 opacity-100"
                      : slideDirection === "right"
                        ? index < activePlatform
                          ? "-translate-x-full opacity-0"
                          : "translate-x-full opacity-0"
                        : index < activePlatform
                          ? "translate-x-full opacity-0"
                          : "-translate-x-full opacity-0"
                  }`}
                >
                  {/* Condition pour le scroll */}
                  {platform.scroll ? (
                    <div className="overflow-y-auto max-h-full">
                      <img
                        src={platform.image}
                        alt={`Preuve de réalisation ${platform.name}`}
                        className="w-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <img
                      src={platform.image}
                      alt={`Preuve de réalisation ${platform.name}`}
                      className="max-h-full object-center mx-auto"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Indicateurs de position avec animation */}
      <div
        className={`flex justify-center mt-4 gap-2 transition-all duration-700 delay-700 transform ${
          animationStage >= 3
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {platforms.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activePlatform
                ? "bg-gradient-to-r from-cyan-400 to-teal-400 w-4"
                : "bg-gray-700"
            }`}
            onClick={() => handlePlatformChange(index)}
            role="button"
            aria-label={`Voir la plateforme ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Ajoutez ce CSS global pour l'animation du gradient
// Vous pouvez l'ajouter dans votre fichier global.css
/*
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-shift {
  animation: gradient-shift 3s ease infinite;
  background-size: 200% 200%;
}
*/
