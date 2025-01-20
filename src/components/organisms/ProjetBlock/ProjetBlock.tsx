import { ProjetDrawer } from "@/components/atoms/ProjetDrawer";
import { Typography } from "@/components/atoms/Typography/Typography";
import signaleoIcon from "@/assets/images/projet_logo/signaleo.png";
import mySocialWorkerIcon from "@/assets/images/projet_logo/mySocialWorker.webp";
import monRestoHalalIcon from "@/assets/images/projet_logo/mrh.jpg";
import snowpactIcon from "@/assets/images/projet_logo/snowpact.png";
import adnIcon from "@/assets/images/projet_logo/adn.png";
import innovIcon from "@/assets/images/projet_logo/innovHabitat.png";
import evoliosIcon from "@/assets/images/projet_logo/evolios.png";

import { useState } from "react";
import { Switch } from "@/components/atoms/Switch";

type Section = "professionnel" | "scolaire";

export const ProjetBlock = () => {
  const projectsProfessionnel = [
    {
      name: "Innov Habitat",
      link: "innovhabitat.eu",
      year: "2024",
      description:
        "Entreprise de construction et de rénovation de façades et l'isolation thermique.",
      publicLabel:
        "Propriétaires de biens immobiliers et entreprises de construction/rénovation",
      missionLabel:
        "En charge de la migration du site vers WordPress, en veillant à conserver les fonctionnalités existantes tout en simplifiant la gestion des contenus pour le client.",
      technoLabel: "WordPress",
      tools: "Slack, o2switch",
      image: innovIcon,
    },
    {
      name: "Signaleo",
      link: "signaleo.co",
      year: "2024",
      description:
        "Application mobile pour faciliter la gestion des incidents dans les villes pour les citoyens et pour les mairies",
      publicLabel: "Mairies / Citoyens",
      missionLabel:
        "Développement du nouveau design pour améliorer l'expérience utilisateur, ainsi qu'une application mobile permettant de signaler des incidents en temps réel.",
      technoLabel: "npm, next, tailwind, react native",
      tools: "Slack, Github, Figma, VScode, Xcode, Android Studio",
      image: signaleoIcon,
    },
    {
      name: "Mon Resto'Halal",
      link: "mon-resto-halal.com",
      year: "2023-2024",
      description:
        "Application qui référence les restaurant halal en France et qui permet de garantir la qualité des restaurants lister dans le site.",
      publicLabel: "Les restaurateurs / Les consommateurs",
      missionLabel:
        "Correction de divers bugs impactant le front du site et l'application mobile, ce qui a permis de stabiliser et d'optimiser les performances.",
      technoLabel: "npm, next, tailwind, make, react native",
      tools: "Slack, Github, Figma, VScode, Xcode, Android Studio",
      image: monRestoHalalIcon,
    },
    {
      name: "Snowpact",
      link: "snowpact.com",
      year: "2024",
      description:
        "Agence spécialisée dans le développement web sur mesure, offrant des services comme la création de sites internet, d'applications web et mobile.",
      publicLabel: "Snowpact, Entreprises",
      missionLabel: "Correction des bugs sur le front du site.",
      technoLabel: "npm, next, tailwind",
      tools: "Slack, Github, VScode",
      image: snowpactIcon,
    },
    {
      name: "ADN",
      link: "animationdigitalnetwork.fr",
      year: "2024",
      description: "Plateforme de streaming dédiée aux fans d'animé",
      publicLabel: "ADN",
      missionLabel:
        "Migration du cron anciennement développé en PHP, en TypeScript en suivant une Clean Architecture, pour améliorer la maintenabilité et la performance du système.",
      technoLabel: "npm, react, tailwind",
      tools: "Slack, Gitlab, VScode",
      image: adnIcon,
    },
    {
      name: "Evolios",
      link: "evolios.fr",
      year: "2024",
      description:
        "Evolios est une application back-office dédiée aux entreprises du secteur du bâtiment. Elle permet une gestion simplifiée des dépenses, des achats de matériaux, et du suivi des stocks.",
      publicLabel: "Entreprises du bâtiment / Evolios",
      missionLabel:
        "Développement d'un back-office complet pour permettre une gestion optimisée des données et des fonctionnalités.",
      technoLabel: "npm, react, tailwind",
      tools: "Slack, Github, VScode",
      image: evoliosIcon,
    },
    {
      name: "My Social Worker",
      link: "mysocialworker.fr",
      year: "2023",
      description:
        "MySocialWorker est une plateforme numérique qui facilite les démarches administratives pour les bénéficiaires d'aides sociales et les travailleurs sociaux.",
      publicLabel: "Bénéficiaires sociaux et travailleurs sociaux",
      missionLabel:
        "Conception et développement front du site, en mettant l'accent sur une interface intuitive et adaptée aux besoins des utilisateurs.",
      technoLabel: "npm, next, tailwind",
      tools: "Slack, Github, Figma, VScode",
      image: mySocialWorkerIcon,
    },
  ];

  const projectsScolaire = [
    {
      name: "TextAdventure",
      link: "mon-resto-halal.com",
      year: "2024",
      description: "",
      image: signaleoIcon,
    },
    {
      name: "Liste De Course",
      link: "mon-resto-halal.com",
      year: "2024",
      description: "",
      image: signaleoIcon,
    },
    {
      name: "Journal",
      link: "mon-resto-halal.com",
      year: "2024",
      description: "",
      image: signaleoIcon,
    },
    {
      name: "JO Ticket",
      link: "mon-resto-halal.com",
      year: "2024",
      description: "",
      image: signaleoIcon,
    },
    {
      name: "Billeterie",
      link: "mon-resto-halal.com",
      year: "2024",
      description: "",
      image: signaleoIcon,
    },
    {
      name: "Entrainement",
      link: "mon-resto-halal.com",
      year: "2024",
      description: "",
      image: signaleoIcon,
    },
    {
      name: "Gestio de Pilote",
      link: "mon-resto-halal.com",
      year: "2024",
      description: "",
      image: signaleoIcon,
    },
    {
      name: "Heritage",
      link: "mon-resto-halal.com",
      year: "2024",
      description: "",
      image: signaleoIcon,
    },
    {
      name: "BDD",
      link: "mon-resto-halal.com",
      year: "2024",
      description: "",
      image: signaleoIcon,
    },
    {
      name: "AlwaysData",
      link: "mon-resto-halal.com",
      year: "2024",
      description: "",
      image: signaleoIcon,
    },
  ];

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
        {activeSection === "professionnel" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {projectsProfessionnel.map((projet) => (
              <ProjetDrawer
                key={projet.name}
                name={projet.name}
                description={projet.description}
                year={projet.year}
                image={projet.image}
                link={projet.link}
                publicLabel={projet.publicLabel}
                missionLabel={projet.missionLabel}
                technoLabel={projet.technoLabel}
                tools={projet.tools}
              />
            ))}
          </div>
        )}
        {activeSection === "scolaire" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {projectsScolaire.map((projet) => (
              <ProjetDrawer
                key={projet.name}
                name={projet.name}
                description={projet.description}
                year={projet.year}
                image={projet.image}
                link={projet.link}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
