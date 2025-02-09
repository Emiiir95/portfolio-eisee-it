import { ProjetCard } from "@/components/atoms/ProjetCard";
import { Typography } from "@/components/atoms/Typography/Typography";
import { useState } from "react";
import { Switch } from "@/components/atoms/Switch";
import {
  realisationsProfessionnels,
  realisationsScolaires,
} from "@/components/pages/RealisationPage/realisationsData";

type Section = "professionnel" | "scolaire";

export const ProjetBlock = () => {
  const [activeSection, setActiveSection] = useState<Section>("professionnel");

  const handleSwitchChange = () => {
    setActiveSection((prev) =>
      prev === "professionnel" ? "scolaire" : "professionnel",
    );
  };

  return (
    <div className="flex items-center flex-col">
      <Typography
        variant="heroTitle"
        color="white"
        animated
        customClassName="md:pb-20 pb-10"
      >
        Tous mes
        <span className="text-[#EA4650]"> projets !</span>
      </Typography>
      <div className="w-full shadow-div flex-col flex rounded-3xl md:py-5 p-12 md:px-32 bg-[#27272A] border-2 border-[#27272A] bg-opacity-30 relative md:items-start md:justify-start items-center justify-center">
        <div className="flex justify-center items-center md:justify-start md:items-start h-12 pt-12 rounded-2xl w-auto gap-6 mb-24 md:flex-row flex-col">
          <Typography
            variant="h2"
            customClassName={
              activeSection === "professionnel"
                ? "text-orange-500"
                : "text-gray-500"
            }
          >
            Professionnel
          </Typography>
          <Switch
            checked={activeSection === "scolaire"}
            onChange={handleSwitchChange}
          />
          <Typography
            variant="h3"
            customClassName={
              activeSection === "scolaire" ? "text-orange-500" : "text-gray-500"
            }
          >
            Scolaire
          </Typography>
        </div>
        <div className="min-h-[500px]">
          {activeSection === "professionnel" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
              {realisationsProfessionnels.map((projet) => (
                <>
                  <ProjetCard
                    key={projet.url}
                    url={projet.url}
                    title={projet.title}
                    // description={projet.description}
                    year={projet.year}
                    image={projet.image}
                    // link={projet.link}
                    // publicLabel={projet.publicLabel}
                    // missionLabel={projet.missionLabel}
                    // technoLabel={projet.technoLabel}
                    // tools={projet.tools}
                  />
                </>
              ))}
            </div>
          )}
          {activeSection === "scolaire" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
              {realisationsScolaires.map((projet) => (
                <ProjetCard
                  key={projet.url}
                  url={projet.url}
                  title={projet.title}
                  // description={projet.description}
                  year={projet.year}
                  image={projet.image}
                  // link={projet.link}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
