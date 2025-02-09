import { Typography } from "@/components/atoms/Typography/Typography";
import { useState } from "react";

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

  const handlePlatformChange = (index: number) => {
    if (index > activePlatform) {
      setSlideDirection("right");
    } else {
      setSlideDirection("left");
    }
    setActivePlatform(index);
  };

  return (
    <div className="w-[80%] mx-auto bg-black p-8 rounded-2xl shadow-[0_0_100px_rgba(0,255,255,0.1)]">
      {/* En-tête */}
      <div className="mb-8 text-center">
        <Typography
          weight="bold"
          marginClassName="mb-2"
          variant="h1"
          customClassName="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
        >
          {title}
        </Typography>
        <div className="flex items-center justify-center gap-3 flex-wrap">
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

      {/* Zone de preuve */}
      <div className="relative group overflow-hidden">
        <div className="relative bg-black rounded-lg overflow-hidden">
          <div className="aspect-video w-full relative overflow-hidden">
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

      {/* Indicateurs de position */}
      <div className="flex justify-center mt-4 gap-2">
        {platforms.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activePlatform
                ? "bg-gradient-to-r from-cyan-400 to-teal-400 w-4"
                : "bg-gray-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
