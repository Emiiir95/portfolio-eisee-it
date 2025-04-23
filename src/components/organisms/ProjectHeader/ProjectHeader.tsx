// import { Typography } from "@/components/atoms/Typography/Typography";

import { Typography } from "@/components/atoms/Typography/Typography";
import { useEffect, useState } from "react";
interface ProjectHeaderProps {
  realisation: {
    image: string;
    title: string;
    year: string;
    technoLabel: string;
    tools: string;
    link?: string;
    description?: string;
    publicLabel?: string;
    missionLabel?: string;
  };
}

export function ProjectHeader({ realisation }: ProjectHeaderProps) {
  const [activeTab, setActiveTab] = useState<"mission" | "tech" | "tools">(
    "mission",
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTabChange = (tab: "mission" | "tech" | "tools") => {
    console.log("Changement d'onglet vers:", tab);
    setActiveTab(tab);
  };

  return (
    <div className="w-full px-4 py-12 md:py-24">
      <div className="w-full max-w-5xl mx-auto">
        {/* Carte principale avec style moderne et asymétrique */}
        <div className="bg-black relative overflow-hidden rounded-t-xl md:rounded-t-3xl">
          {/* Fond décoratif avec formes abstraites */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 md:right-20 w-36 md:w-72 h-36 md:h-72 rounded-full bg-indigo-600 blur-[50px] md:blur-[100px]"></div>
            <div className="absolute bottom-10 left-10 md:left-20 w-40 md:w-80 h-40 md:h-80 rounded-full bg-purple-600 blur-[50px] md:blur-[100px]"></div>
            <div className="absolute top-20 md:top-40 left-20 md:left-40 w-30 md:w-60 h-30 md:h-60 rounded-full bg-cyan-600 blur-[50px] md:blur-[100px]"></div>
          </div>

          {/* Partie supérieure avec l'image et le titre */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 p-6 md:p-12 relative">
            {/* Image avec cadre décoratif - centrer sur mobile */}
            <div
              className={`relative transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 relative mx-auto md:mx-0">
                <div className="absolute inset-0 border-2 border-purple-500 rounded-2xl transform rotate-6 bg-purple-800/20"></div>
                <div className="absolute inset-0 border-2 border-cyan-500 rounded-2xl transform -rotate-3 bg-cyan-800/20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-white rounded-2xl overflow-hidden">
                  <img
                    src={realisation.image}
                    alt={realisation.title}
                    className="w-full h-full object-cover p-2"
                  />
                </div>
              </div>
            </div>

            {/* Texte et informations - alignement centré sur mobile */}
            <div className="flex-1 w-full">
              <div
                className={`transform transition-all duration-700 text-center md:text-left ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: "300ms" }}
              >
                <Typography
                  variant="h1"
                  weight="bold"
                  marginClassName="mb-5"
                  animated
                  customClassName="text-white mb-3 sm:text-left tracking-tight"
                >
                  <span className="bg-gradient-to-b from-[#5813C5] to-gray-100 bg-clip-text text-transparent">
                    {realisation.title}
                  </span>
                </Typography>

                {realisation.description && (
                  <p className="text-gray-300 mb-6 max-w-2xl sm:text-left mr-auto md:mx-0">
                    {realisation.description}
                  </p>
                )}

                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-6 md:mb-8">
                  <span className="text-white font-medium">Début:</span>
                  <span className="px-4 py-1 bg-indigo-900/40 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/30">
                    {realisation.year}
                  </span>

                  {realisation.link && (
                    <a
                      href={`https://${realisation.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto md:ml-auto mt-4 md:mt-0 px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg transition-all duration-300 flex items-center justify-center md:justify-start gap-2 text-sm font-medium"
                    >
                      Visiter
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation par onglets - adaptée au mobile */}
          <div
            className={`px-4 md:px-12 transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex justify-center md:justify-start gap-1 md:gap-2 overflow-x-auto border-b border-gray-800">
              <button
                onClick={() => handleTabChange("mission")}
                className={`px-3 md:px-6 py-3 text-xs md:text-sm font-medium transition-all duration-300 z-50 whitespace-nowrap ${
                  activeTab === "mission"
                    ? "text-purple-400 border-b-2 border-purple-500"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                type="button"
              >
                Mission
              </button>
              <button
                onClick={() => handleTabChange("tech")}
                className={`px-3 md:px-6 py-3 text-xs md:text-sm font-medium transition-all duration-300 z-50 whitespace-nowrap ${
                  activeTab === "tech"
                    ? "text-cyan-400 border-b-2 border-cyan-500"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                type="button"
              >
                Technologies
              </button>
              <button
                onClick={() => handleTabChange("tools")}
                className={`px-3 md:px-6 py-3 text-xs md:text-sm font-medium transition-all duration-300 z-50 whitespace-nowrap ${
                  activeTab === "tools"
                    ? "text-indigo-400 border-b-2 border-indigo-500"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                type="button"
              >
                Outils
              </button>
            </div>
          </div>
        </div>

        {/* Contenu de l'onglet sélectionné */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-b-xl md:rounded-b-3xl overflow-hidden border-t border-gray-800">
          <div
            className={`p-6 md:p-12 min-h-[160px] md:min-h-[180px] transition-all duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}
          >
            {activeTab === "mission" && (
              <div className="space-y-4 md:space-y-6">
                {realisation.missionLabel && (
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-purple-400 mb-2">
                      Ma mission
                    </h3>
                    <p className="text-sm md:text-base text-gray-300">
                      {realisation.missionLabel}
                    </p>
                  </div>
                )}

                {realisation.publicLabel && (
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-purple-400 mb-2">
                      Public cible
                    </h3>
                    <p className="text-sm md:text-base text-gray-300">
                      {realisation.publicLabel}
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "tech" && (
              <div>
                <h3 className="text-base md:text-lg font-semibold text-cyan-400 mb-3 md:mb-4">
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {realisation.technoLabel.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 md:px-4 py-1 md:py-2 bg-cyan-900/30 text-cyan-300 rounded-lg text-xs md:text-sm font-medium border border-cyan-700/40"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "tools" && (
              <div>
                <h3 className="text-base md:text-lg font-semibold text-indigo-400 mb-3 md:mb-4">
                  Outils de développement
                </h3>
                <div className="flex flex-wrap gap-2">
                  {realisation.tools.split(",").map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 md:px-4 py-1 md:py-2 bg-indigo-900/30 text-indigo-300 rounded-lg text-xs md:text-sm font-medium border border-indigo-700/40"
                    >
                      {tool.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
