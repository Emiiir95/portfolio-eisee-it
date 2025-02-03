import { useState } from "react";
import { Typography } from "@/components/atoms/Typography/Typography";

const tabs = [
  { id: "citoyens", label: "Page Citoyens" },
  { id: "mairie", label: "Page Mairie" },
  { id: "mobile", label: "Mobile signalement" },
  { id: "tunnel", label: "Tunnel de signalement" },
];

// Définition du type des clés
type ContentKey = "citoyens" | "mairie" | "mobile" | "tunnel";

const content: Record<
  ContentKey,
  { title: string; description: string; image: string }
> = {
  citoyens: {
    title: "Page d'accueil des citoyens",
    description:
      "Voici la page d'accueil de Signaleo. Le site possède 2 landing pages : une pour les citoyens et une pour les mairies intéressées par le service de Signaleo.",
    image: "/images/citoyens.png",
  },
  mairie: {
    title: "Page d'accueil des mairies",
    description:
      "Cette page est dédiée aux mairies souhaitant utiliser Signaleo pour améliorer la gestion des signalements.",
    image: "/images/mairie.png",
  },
  mobile: {
    title: "Application mobile",
    description:
      "Signaleo est également disponible sur mobile pour faciliter les signalements en déplacement.",
    image: "/images/mobile.png",
  },
  tunnel: {
    title: "Tunnel de signalement",
    description:
      "Le tunnel de signalement guide les citoyens dans la création et le suivi de leurs signalements.",
    image: "/images/tunnel.png",
  },
};

export default function InterfacePreview() {
  const [activeTab, setActiveTab] = useState<ContentKey>("citoyens");

  return (
    <div className="bg-black text-white py-12 px-6">
      {/* Titre principal */}
      <Typography variant="h1" align="center" weight="bold">
        Interface
      </Typography>
      <Typography
        variant="h5"
        align="center"
        customColorClass="mt-2 opacity-80"
      >
        Découvrez en responsive les différentes pages du projet !
      </Typography>

      {/* Onglets */}
      <div className="flex justify-center space-x-6 mt-8 border-b border-gray-700 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ContentKey)}
            className={`pb-2 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-white"
                : "text-gray-400"
            } transition-all`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenu dynamique */}
      <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Typography variant="h2" weight="bold">
            {content[activeTab].title}
          </Typography>
          <Typography variant="paragraph" customClassName="mt-2 text-gray-300">
            {content[activeTab].description}
          </Typography>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={content[activeTab].image}
            alt={content[activeTab].title}
            width={500}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
