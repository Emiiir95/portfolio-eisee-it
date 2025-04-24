import { PublicLayout } from "@/components/templates/PublicLayout";
import { Typography } from "@/components/atoms/Typography/Typography";
import { NeonBlur } from "@/components/atoms/NeonBlur";
import {
  Code,
  Database,
  Globe,
  User,
  Users,
  GitBranch,
  MessageCircle,
  Briefcase,
  Calendar,
  Box,
  GanttChart,
  Quote,
} from "lucide-react";

export const BilanPage = () => {
  // Compétences techniques (langages, frameworks, outils)
  const technicalSkills = [
    { name: "HTML/CSS", icon: <Code className="text-orange-400" /> },
    { name: "JavaScript", icon: <Code className="text-yellow-400" /> },
    { name: "TypeScript", icon: <Code className="text-blue-500" /> },
    { name: "React", icon: <Code className="text-cyan-400" /> },
    { name: "Next.js", icon: <Code className="text-gray-400" /> },
    { name: "Tailwind CSS", icon: <Code className="text-teal-400" /> },
    { name: "Node.js", icon: <Code className="text-green-500" /> },
    { name: "Express", icon: <Code className="text-gray-500" /> },
    { name: "Python", icon: <Code className="text-blue-600" /> },
    { name: "Django", icon: <Code className="text-green-600" /> },
    { name: "SQL", icon: <Database className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <Database className="text-green-500" /> },
    { name: "Git/GitHub", icon: <GitBranch className="text-purple-400" /> },
    { name: "WordPress", icon: <Globe className="text-blue-700" /> },
    { name: "Shopify", icon: <Globe className="text-green-400" /> },
    { name: "API", icon: <Code className="text-indigo-400" /> },
  ];

  // Compétences transversales (soft skills)
  const softSkills = [
    { name: "Travail en équipe", icon: <Users className="text-blue-400" /> },
    {
      name: "Communication",
      icon: <MessageCircle className="text-green-400" />,
    },
    {
      name: "Gestion de projet",
      icon: <GitBranch className="text-orange-400" />,
    },
    {
      name: "Résolution problèmes",
      icon: <Code className="text-purple-400" />,
    },
    { name: "Autonomie", icon: <User className="text-indigo-400" /> },
    { name: "Adaptabilité", icon: <GitBranch className="text-teal-400" /> },
    { name: "Méthode agile", icon: <GitBranch className="text-amber-400" /> },
  ];

  // Projets significatifs
  const significantProjects = [
    {
      title: "ITStock",
      type: "Professionnel",
      year: "2025",
      description: "E-commerce spécialisé matériel informatique",
      techs: ["Shopify", "JavaScript", "API"],
      icon: <Box className="text-purple-500" />,
    },
    {
      title: "Signaleo",
      type: "Professionnel",
      year: "2024",
      description: "Application de signalement d'incidents",
      techs: ["React", "Next.js", "Tailwind"],
      icon: <GanttChart className="text-blue-500" />,
    },
    {
      title: "Gestion Epi",
      type: "Scolaire",
      year: "2024-2025",
      description: "Gestion d'équipements d'escalade",
      techs: ["React", "Node.js", "Express"],
      icon: <Box className="text-green-500" />,
    },
    {
      title: "JO Ticket",
      type: "Scolaire",
      year: "2024-2025",
      description: "Système de billetterie événements sportifs",
      techs: ["Django", "Python", "SQLite"],
      icon: <Briefcase className="text-amber-500" />,
    },
  ];

  // Chiffres clés
  const stats = [
    { value: "+1000", label: "Heures de code" },
    { value: "+5", label: "Projets réalisés" },
    { value: "+414", label: "Contributions GitHub" },
    { value: "+7", label: "Technologies" },
  ];

  return (
    <PublicLayout>
      <div className="relative">
        <div className="fixed inset-0 pointer-events-none z-0">
          <NeonBlur customPosition="absolute bg-purple-600 opacity-20 left-[10em] top-[30em]" />
          <NeonBlur customPosition="absolute bg-blue-600 opacity-20 right-[10em] top-[10em]" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 z-50">
          <Typography
            variant="componentTitle"
            animated
            align="center"
            marginClassName="mb-12"
          >
            Mon <span className="text-[#D932F7]">Bilan</span> BTS SIO
          </Typography>

          <div className="grid md:grid-cols-2 gap-10 bg-black/20 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 mb-10">
            {/* Compétences techniques */}
            <div>
              <Typography
                variant="h2"
                weight="bold"
                color="white"
                marginClassName="mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Hard skills
                </span>
              </Typography>

              <div className="grid grid-cols-2 gap-2">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={`tech-${index}`}
                    className="flex items-center gap-2 bg-black/30 border border-gray-800 rounded-lg px-3 py-2 hover:border-purple-500/40 hover:bg-purple-900/10 hover:scale-105 hover:shadow-[0_0_10px_rgba(139,92,252,0.3)] transition-all duration-300"
                    // className="flex items-center gap-2 bg-black/30 border border-gray-800 rounded-lg px-3 py-2 hover:border-purple-500/40 transition-all"
                  >
                    <div className="text-gray-300">{skill.icon}</div>
                    <span className="text-white text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compétences transversales */}
            <div>
              <Typography
                variant="h2"
                weight="bold"
                color="white"
                marginClassName="mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Soft skills
                </span>
              </Typography>

              <div className="grid grid-cols-2 gap-2">
                {softSkills.map((skill, index) => (
                  <div
                    key={`soft-${index}`}
                    className="flex items-center gap-2 bg-black/30 border border-gray-800 rounded-lg px-3 py-2 hover:border-blue-500/40 hover:bg-blue-900/10 hover:scale-105 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300"
                    // className="flex items-center gap-2 bg-black/30 border border-gray-800 rounded-lg px-3 py-2 hover:border-blue-500/40 transition-all"
                  >
                    <div className="text-gray-300">{skill.icon}</div>
                    <span className="text-white text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistiques simples */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="z-50 bg-black/30 rounded-lg p-4 border border-gray-800/60 text-center hover:bg-black/50 hover:border-indigo-500/30 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300"
                // className="bg-black/30 rounded-lg p-4 border border-gray-800/60 text-center"
              >
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Projets significatifs */}
          <div className="mt-32">
            <Typography
              variant="h1"
              weight="bold"
              color="white"
              align="center"
              marginClassName="mb-8"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
                Projets Significatifs
              </span>
            </Typography>

            <div className="grid md:grid-cols-2 gap-6">
              {significantProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-black/30 rounded-lg border border-gray-800 overflow-hidden hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:-translate-y-2 transition-all duration-500 group"
                  // className="bg-black/30 rounded-lg border border-gray-800 overflow-hidden hover:border-blue-500/40 transition-all group"
                >
                  <div
                    className={`p-4 ${project.type === "Professionnel" ? "bg-blue-900/30" : "bg-green-900/30"} flex justify-between items-center`}
                  >
                    <div className="transform transition-transform duration-300 group-hover:rotate-6">
                      <div className="flex items-center gap-2">
                        {project.icon}
                        <span className="font-bold text-white text-lg">
                          {project.title}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-300">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-gray-300 text-base mb-4">
                      {project.description}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`text-sm px-3 py-1 rounded-full ${
                            project.type === "Professionnel"
                              ? "bg-blue-900/30 text-blue-300 border border-blue-700/30"
                              : "bg-green-900/30 text-green-300 border border-green-700/30"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bilan en entreprise */}
          <div className="mt-32 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-indigo-800/40 p-6 md:p-8 hover:shadow-[0_0_30px_rgba(79,70,229,0.2)] hover:from-purple-900/40 hover:to-blue-900/40 hover:border-indigo-700/50 transition-all duration-700">
            {/* <div className="mt-32 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-indigo-800/40 p-6 md:p-8"> */}
            <Typography
              variant="h1"
              weight="bold"
              color="white"
              align="center"
              marginClassName="mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Bilan en Entreprise
              </span>
            </Typography>

            <div className="flex gap-4">
              <div className="hidden md:flex flex-shrink-0 items-start pt-2">
                <Quote className="w-10 h-10 text-indigo-400 opacity-40" />
              </div>
              <div className="text-gray-200 leading-relaxed text-lg">
                Emir travaille sur des projets, soit seul, soit en binôme avec
                un autre altemant en BTS Slam de sa classe. Ses projets
                concernent : projet de développement web relatif à la création
                d'un nouveau site web, pour migration gestion des tickets et
                demandes relatifs à des demandes clients gestion d'un projet en
                totale autonomie pour la création d'une plateforme de dons pour
                une association.
                <br />
                <br />
                Il travaille en mode projet avec une communication régulière
                avec le MA, mais est surtout en relation directe avec le client
                et assume la responsabilité du projet. Cette forme de
                "challenge" motive Emir et lui permet de monter en compétences.
                <br />
                <br />
                <span className="text-indigo-300 font-semibold">
                  Il a acquis une maturité professionnelle, et s'implique dans
                  ses projets avec détermination. M.Avci est très satisfait de
                  son évolution et de son apprentissage.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};
