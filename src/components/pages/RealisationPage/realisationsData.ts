import hero from "@/assets/images/headerPortfolio.webp";
import murat from "@/assets/images/avatar/murat.webp";
import fatih from "@/assets/images/avatar/fatih.webp";
import mohamed from "@/assets/images/avatar/mohamed.webp";
import semih from "@/assets/images/avatar/semih.webp";
import kabir from "@/assets/images/avatar/kabir.webp";
import farid from "@/assets/images/avatar/farid.webp";
import { MdArchitecture } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import signaleoIcon from "@/assets/images/projet_logo/signaleo.webp";
import mySocialWorkerIcon from "@/assets/images/projet_logo/mySocialWorker.webp";
import monRestoHalalIcon from "@/assets/images/projet_logo/mrh.webp";
import snowpactIcon from "@/assets/images/projet_logo/snowpact.webp";
import adnIcon from "@/assets/images/projet_logo/adn.webp";
import ditibahi from "@/assets/images/projet_logo/ditibahi.webp";
import innovIcon from "@/assets/images/projet_logo/innovHabitat.webp";
import evoliosIcon from "@/assets/images/projet_logo/evolios.webp";
import helioIcon from "@/assets/images/projet_logo/helio_logo.webp";
import ahiCom from "@/assets/images/projet/ditibahi/communication.webp";
import ahiApercu from "@/assets/images/projet/ditibahi/apercu.webp";
import ahiSave from "@/assets/images/projet/ditibahi/sauvegarde.webp";
import helioApercu1 from "@/assets/images/projet/helio/apercu1.webp";
import helioApercu2 from "@/assets/images/projet/helio/apercu2.webp";
import helioSave from "@/assets/images/projet/helio/sauvegarde.webp";
import helioCom from "@/assets/images/projet/helio/communication.webp";
import signaleoWebApercu from "@/assets/images/projet/signaleoWeb/apercu.webp";
import signaleoWebGithub from "@/assets/images/projet/signaleoWeb/github.webp";
import signaleoWebCom from "@/assets/images/projet/signaleoWeb/slack.webp";
import signaleoWebFigma from "@/assets/images/projet/signaleoWeb/figma.webp";
import signaleoWebLinear from "@/assets/images/projet/signaleoWeb/linear.webp";

import signaleoMobileApercu from "@/assets/images/projet/signaleoMobile/interface.webp";
import signaleoMobileGithub from "@/assets/images/projet/signaleoMobile/github.webp";
import signaleoMobileSlack from "@/assets/images/projet/signaleoMobile/slack.webp";
import signaleoMobileFigma from "@/assets/images/projet/signaleoMobile/figma.webp";
import signaleoMobileLinear from "@/assets/images/projet/signaleoMobile/linear.webp";
import { PiHandPointingBold } from "react-icons/pi";

export const realisationsProfessionnels = [
  {
    url: "ditibahi",
    title: "Ditib AHI",
    link: "ditibahi.org",
    year: "2025",
    description: "",
    publicLabel: "",
    missionLabel: "",
    technoLabel: "pnpm, next, tailwind",
    tools: "Slack, Github",
    image: ditibahi,
    dataPage: {
      platforms: [
        { name: "Interface", image: ahiApercu, scroll: true },
        { name: "Sauvegarde", image: ahiSave },
        { name: "Communication", image: ahiCom },
      ],
      teams: [
        { avatar: murat, name: "Murat", job: "Architecte" },
        { avatar: fatih, name: "Fatih", job: "Dév Front" },
      ],
      stats: [
        { id: 1, name: "Branches", value: "10" },
        { id: 2, name: "Commits", value: "55" },
        { id: 3, name: "Pages", value: "14" },
        { id: 4, name: "Jours", value: "2" },
      ],
      donorSpaceInfo: [
        { icon: FaCode, alt: "credit card", label: "Développeur front" },
        { icon: FaMagnifyingGlass, alt: "gift", label: "SEO" },
      ],
    },
  },
  {
    url: "helio-fitness",
    title: "Hélio fitness",
    link: "helio.fitness",
    year: "2025",
    description:
      "Hélio Fitness est une salle de sport moderne offrant des cours variés et un coaching personnalisé.",
    publicLabel: "Propriétaires de Hélio Fitness / leur communauté",
    missionLabel:
      "Migration du site WordPress vers Next.js, en améliorant et en veillant à conserver les fonctionnalités existantes tout en simplifiant la gestion des contenus pour le client.",
    technoLabel: "npm, next, tailwind",
    tools: "Slack, Github, VSCode",
    image: helioIcon,
    dataPage: {
      platforms: [
        { name: "Interface Hélio", image: helioApercu1, scroll: true },
        { name: "Interface Franchise", image: helioApercu2, scroll: true },
        { name: "Sauvegarde", image: helioSave },
        { name: "Communication", image: helioCom },
      ],
      teams: [{ avatar: semih, name: "Semih", job: "Dév Front / SEO" }],
      stats: [
        { id: 1, name: "Branches", value: "3" },
        { id: 1, name: "Commit", value: "61" },
        { id: 3, name: "Pages", value: "16" },
        { id: 4, name: "Semaines", value: "2" },
      ],
      donorSpaceInfo: [
        { icon: MdArchitecture, alt: "building", label: "Architecture" },
        { icon: FaCode, alt: "credit card", label: "Développeur front" },
      ],
    },
  },
  {
    url: "innov-habitat",
    id: 2,
    title: "Innov Habitat",
    link: "innovhabitat.eu",
    year: "2024-2025",
    description:
      "Entreprise de construction et de rénovation de façades et l'isolation thermique.",
    publicLabel:
      "Propriétaires de biens immobiliers et entreprises de construction/rénovation",
    missionLabel:
      "En charge de la migration du site vers WordPress, en veillant à conserver les fonctionnalités existantes tout en simplifiant la gestion des contenus pour le client.",
    technoLabel: "WordPress",
    tools: "Slack, o2switch",
    image: innovIcon,
    dataPage: {
      platforms: [
        { name: "figma", image: hero },
        { name: "Platform 1", image: hero },
        { name: "Platform 1", image: hero },
        { name: "Platform 2", image: hero },
      ],
      teams: [{ avatar: semih, name: "semih", job: "Dév wordpress / SEO" }],
      stats: [
        { id: 1, name: "Commit", value: "800" },
        { id: 2, name: "Composants developper", value: "30" },
        { id: 3, name: "Pages", value: "14" },
        { id: 4, name: "Semaines", value: "2" },
      ],
      donorSpaceInfo: [
        { icon: FaCode, alt: "credit card", label: "Développeur wordpress" },
        { icon: FaMagnifyingGlass, alt: "gift", label: "SEO" },
      ],
    },
  },
  {
    url: "signaleo",
    title: "Signaleo",
    link: "signaleo.co",
    year: "2024",
    description:
      "Application mobile pour faciliter la gestion des incidents dans les villes pour les citoyens et pour les mairies",
    publicLabel: "Mairies / Citoyens",
    missionLabel:
      "Développement du nouveau design pour améliorer l'expérience utilisateur, ainsi qu'une application mobile permettant de signaler des incidents en temps réel.",
    technoLabel: "npm, next, tailwind",
    tools: "Slack, Github, Figma, Linear",
    image: signaleoIcon,
    dataPage: {
      platforms: [
        { name: "Interface", image: signaleoWebApercu, scroll: true },
        { name: "Sauvegarde", image: signaleoWebGithub },
        { name: "Communication", image: signaleoWebCom },
        { name: "Maquette", image: signaleoWebFigma },
        { name: "Ticket", image: signaleoWebLinear },
      ],
      teams: [
        { avatar: mohamed, name: "Mohamed", job: "Designer" },
        { avatar: kabir, name: "Kabir", job: "PO / Dév Front" },
        { avatar: semih, name: "Semih", job: "Dév Front" },
      ],
      stats: [
        { id: 2, name: "Branches", value: "146" },
        { id: 1, name: "Commit", value: "776" },
        { id: 3, name: "Pages", value: "+35 000" },
        { id: 4, name: "Mois", value: "4" },
      ],
      donorSpaceInfo: [
        { icon: FaCode, alt: "credit card", label: "Développeur front" },
      ],
    },
  },
  {
    url: "signaleo-mobile",
    title: "Signaleo Mobile",
    link: "signaleo.co/telechargement",
    year: "2024",
    description:
      "Application mobile pour faciliter la gestion des incidents dans les villes pour les citoyens et pour les mairies",
    publicLabel: "Mairies / Citoyens",
    missionLabel:
      "Développement du nouveau design pour améliorer l'expérience utilisateur, ainsi qu'une application mobile permettant de signaler des incidents en temps réel.",
    technoLabel: "npm, react native, tailwind",
    tools: "Slack, Github, Figma, Xcode, Android Studio",
    image: signaleoIcon,
    dataPage: {
      platforms: [
        { name: "Interface", image: signaleoMobileApercu },
        { name: "Sauvegarde", image: signaleoMobileGithub },
        { name: "Communication", image: signaleoMobileSlack },
        { name: "Maquette", image: signaleoMobileFigma },
        { name: "Ticket", image: signaleoMobileLinear },
      ],
      teams: [
        {
          avatar: murat,
          name: "murat",
          job: "PO / Architecte / Dév Back",
        },
        { avatar: semih, name: "Semih", job: "Dév Front / QA" },
      ],
      stats: [
        { id: 1, name: "Commit", value: "800" },
        { id: 2, name: "Composants developper", value: "30" },
        { id: 3, name: "Pages", value: "+30 000" },
        { id: 4, name: "Semaines", value: "2" },
      ],
      donorSpaceInfo: [
        { icon: FaCode, alt: "credit card", label: "Développeur front" },
        { icon: PiHandPointingBold, alt: "cursor", label: "QA" },
      ],
    },
  },
  {
    url: "monrestohalal",
    title: "Mon Resto'Halal",
    link: "mon-resto-halal.com",
    year: "2023-2024",
    description:
      "Application qui référence les restaurant halal en France et qui permet de garantir la qualité des restaurants lister dans le site.",
    publicLabel: "Les restaurateurs / Les consommateurs",
    missionLabel:
      "Correction de divers bugs impactant le front du site et l'application mobile, ce qui a permis de stabiliser et d'optimiser les performances.",
    technoLabel: "npm, next, tailwind, make, react native",
    tools: "Slack, Github, Figma, Xcode, Android Studio",
    image: monRestoHalalIcon,
    dataPage: {
      platforms: [
        { name: "figma", image: hero },
        { name: "Platform 1", image: hero },
        { name: "Platform 1", image: hero },
        { name: "Platform 2", image: hero },
      ],
      teams: [
        { avatar: farid, name: "figma", job: "hero" },
        { avatar: farid, name: "Platform 1", job: "hero" },
        { avatar: farid, name: "Platform 1", job: "hero" },
        { avatar: farid, name: "Platform 2", job: "hero" },
      ],
      stats: [
        { id: 1, name: "Commit", value: "800" },
        { id: 2, name: "Composants developper", value: "30" },
        { id: 3, name: "Pages", value: "14" },
        { id: 4, name: "Semaines", value: "2" },
      ],
      donorSpaceInfo: [
        { icon: MdArchitecture, alt: "building", label: "Architecture" },
        { icon: FaCode, alt: "credit card", label: "Développeur front" },
        { icon: FaMagnifyingGlass, alt: "gift", label: "SEO" },
      ],
    },
  },
  {
    url: "snowpact",
    title: "Snowpact",
    link: "snowpact.com",
    year: "2024",
    description:
      "Agence spécialisée dans le développement web sur mesure, offrant des services comme la création de sites internet, d'applications web et mobile.",
    publicLabel: "Snowpact, Entreprises",
    missionLabel: "Correction des bugs sur le front du site.",
    technoLabel: "npm, next, tailwind",
    tools: "Slack, Github, VScode",
    image: snowpactIcon,
    dataPage: {
      platforms: [
        { name: "figma", image: hero },
        { name: "Platform 1", image: hero },
        { name: "Platform 1", image: hero },
        { name: "Platform 2", image: hero },
      ],
      teams: [
        { avatar: farid, name: "figma", job: "hero" },
        { avatar: farid, name: "Platform 1", job: "hero" },
        { avatar: farid, name: "Platform 1", job: "hero" },
        { avatar: farid, name: "Platform 2", job: "hero" },
      ],
      stats: [
        { id: 1, name: "Commit", value: "800" },
        { id: 2, name: "Composants developper", value: "30" },
        { id: 3, name: "Pages", value: "14" },
        { id: 4, name: "Semaines", value: "2" },
      ],
      donorSpaceInfo: [
        { icon: MdArchitecture, alt: "building", label: "Architecture" },
        { icon: FaCode, alt: "credit card", label: "Développeur front" },
        { icon: FaMagnifyingGlass, alt: "gift", label: "SEO" },
      ],
    },
  },
  {
    url: "adn",
    title: "ADN",
    link: "animationdigitalnetwork.fr",
    year: "2024",
    description: "Plateforme de streaming dédiée aux fans d'animé",
    publicLabel: "ADN",
    missionLabel:
      "Migration du cron anciennement développé en PHP, en TypeScript en suivant une Clean Architecture, pour améliorer la maintenabilité et la performance du système.",
    technoLabel: "npm, react, tailwind",
    tools: "Slack, Gitlab, VScode",
    image: adnIcon,
    dataPage: {
      platforms: [
        { name: "figma", image: hero },
        { name: "Platform 1", image: hero },
        { name: "Platform 1", image: hero },
        { name: "Platform 2", image: hero },
      ],
      teams: [
        { avatar: farid, name: "figma", job: "hero" },
        { avatar: farid, name: "Platform 1", job: "hero" },
        { avatar: farid, name: "Platform 1", job: "hero" },
        { avatar: farid, name: "Platform 2", job: "hero" },
      ],
      stats: [
        { id: 1, name: "Commit", value: "800" },
        { id: 2, name: "Composants developper", value: "30" },
        { id: 3, name: "Pages", value: "14" },
        { id: 4, name: "Semaines", value: "2" },
      ],
      donorSpaceInfo: [
        { icon: MdArchitecture, alt: "building", label: "Architecture" },
        { icon: FaCode, alt: "credit card", label: "Développeur front" },
        { icon: FaMagnifyingGlass, alt: "gift", label: "SEO" },
      ],
    },
  },
  {
    url: "evolios",
    title: "Evolios",
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
    dataPage: {
      platforms: [
        { name: "figma", image: hero },
        { name: "Platform 1", image: hero },
        { name: "Platform 1", image: hero },
        { name: "Platform 2", image: hero },
      ],
      teams: [
        { avatar: farid, name: "figma", job: "hero" },
        { avatar: farid, name: "Platform 1", job: "hero" },
        { avatar: farid, name: "Platform 1", job: "hero" },
        { avatar: farid, name: "Platform 2", job: "hero" },
      ],
      stats: [
        { id: 1, name: "Commit", value: "800" },
        { id: 2, name: "Composants developper", value: "30" },
        { id: 3, name: "Pages", value: "14" },
        { id: 4, name: "Semaines", value: "2" },
      ],
      donorSpaceInfo: [
        { icon: MdArchitecture, alt: "building", label: "Architecture" },
        { icon: FaCode, alt: "credit card", label: "Développeur front" },
        { icon: FaMagnifyingGlass, alt: "gift", label: "SEO" },
      ],
    },
  },
  {
    url: "mysocialworker",
    title: "My Social Worker",
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
    dataPage: {
      platforms: [
        { name: "figma", image: hero },
        { name: "Platform 1", image: hero },
        { name: "Platform 1", image: hero },
        { name: "Platform 2", image: hero },
      ],
      teams: [
        { avatar: farid, name: "figma", job: "hero" },
        { avatar: farid, name: "Platform 1", job: "hero" },
        { avatar: farid, name: "Platform 1", job: "hero" },
        { avatar: farid, name: "Platform 2", job: "hero" },
      ],
      stats: [
        { id: 1, name: "Commit", value: "800" },
        { id: 2, name: "Composants developper", value: "30" },
        { id: 3, name: "Pages", value: "14" },
        { id: 4, name: "Semaines", value: "2" },
      ],
      donorSpaceInfo: [
        { icon: MdArchitecture, alt: "building", label: "Architecture" },
        { icon: FaCode, alt: "credit card", label: "Développeur front" },
        { icon: FaMagnifyingGlass, alt: "gift", label: "SEO" },
      ],
    },
  },
];

export const realisationsScolaires = [
  {
    url: "textadventure",
    title: "TextAdventure",
    link: "mon-resto-halal.com",
    year: "2024",
    description: "",
    technoLabel: "npm, next, tailwind",
    tools: "Slack, Github, Figma, VScode",
    image: signaleoIcon,
  },
  {
    url: "listedecourse",
    title: "Liste De Course",
    link: "mon-resto-halal.com",
    year: "2024",
    description: "TEst",
    technoLabel: "npm, next, tailwind",
    tools: "Slack, Github, Figma, VScode",
    image: signaleoIcon,
  },
];
