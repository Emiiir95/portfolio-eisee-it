import { useParams } from "react-router-dom";
import { realisationsProfessionnels } from "./realisationsData";
import { PublicLayout } from "@/components/templates/PublicLayout";

export function RealisationProfessionnelPage() {
  const { url } = useParams();

  const realisation = realisationsProfessionnels.find((rea) => rea.url === url);

  if (!realisation) {
    return (
      <div className="flex justify-center items-center bg-black h-screen">
        <h1 className="text-red-500 text-2xl font-bold">
          Aucun projet trouvé.
        </h1>
      </div>
    );
  }

  return (
    <PublicLayout>
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto bg-black/90 rounded-2xl shadow-[0_0_100px_rgba(0,255,255,0.2)] overflow-hidden">
          {/* En-tête avec image */}
          <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <img
                src={realisation.image}
                alt={realisation.title}
                className="w-32 h-32 rounded-full border-4 border-black object-cover shadow-[0_0_100px_rgba(255,255,255,0.2)]"
              />
            </div>
          </div>

          {/* Contenu */}
          <div className="pt-20 pb-8 px-6 md:px-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {realisation.title}
              </h1>
              <div className="mt-6 space-y-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="flex items-center flex-col space-x-2">
                    <h2 className="text-lg font-semibold text-gray-300 mb-2">
                      Participation sur le projet
                    </h2>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm ring-1 ring-purple-500/20">
                      {realisation.year}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <h2 className="text-lg font-semibold text-gray-300 mb-2">
                    Technologies
                  </h2>
                  <div className="flex flex-wrap justify-center gap-2">
                    {realisation.technoLabel.split(",").map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm ring-1 ring-emerald-500/20"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <h2 className="text-lg font-semibold text-gray-300 mb-2">
                    Outils
                  </h2>
                  <div className="flex flex-wrap justify-center gap-2">
                    {realisation.tools.split(",").map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm ring-1 ring-teal-500/20"
                      >
                        {tool.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {realisation.link && (
                  <div className="pt-8">
                    <a
                      href={`https://${realisation.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-white font-semibold transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    >
                      Visiter le site
                      <svg
                        className="ml-2 w-4 h-4"
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
