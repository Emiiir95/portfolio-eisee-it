import { PublicLayout } from "@/components/templates/PublicLayout";
import { Typography } from "@/components/atoms/Typography/Typography";
import { useState, useRef, useEffect } from "react";
import { NeonBlur } from "@/components/atoms/NeonBlur";
import { motion } from "motion/react";

// Définition des types pour les données de bilan
type CompetenceItem = {
  name: string;
  level: number;
  description: string;
};

type ExperienceItem = {
  title: string;
  date: string;
  description: string;
};

type BilanSection = {
  id: string;
  title: string;
  content: string;
};

export const BilanPage = () => {
  const [activeTab, setActiveTab] = useState("competences");
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // Données des compétences acquises
  const competences: CompetenceItem[] = [
    {
      name: "Développement Front-end",
      level: 85,
      description:
        "Maîtrise de React, Next.js et Tailwind CSS pour créer des interfaces modernes et réactives",
    },
    {
      name: "Développement Back-end",
      level: 70,
      description:
        "Expérience avec Node.js, Express et Django pour la création d'APIs et de services",
    },
    {
      name: "Gestion de Projet",
      level: 75,
      description:
        "Méthodologie agile, travail en équipe, et utilisation d'outils comme Linear et GitHub",
    },
    {
      name: "SEO & Optimisation",
      level: 65,
      description:
        "Techniques d'optimisation pour les moteurs de recherche et utilisation d'outils d'analyse",
    },
  ];

  // Expériences significatives
  const experiences: ExperienceItem[] = [
    {
      title: "Projet Signaleo",
      date: "2024",
      description:
        "Développement front-end d'une application de signalement d'incidents pour les collectivités",
    },
    {
      title: "Projet ITStock",
      date: "2025",
      description:
        "Création d'un site e-commerce spécialisé dans le matériel informatique",
    },
    {
      title: "Gestion Epi",
      date: "2024-2025",
      description:
        "Développement d'un système de gestion d'équipements d'escalade",
    },
    {
      title: "Projet JO Ticket",
      date: "2024-2025",
      description:
        "Développement d'un système de gestion de billets pour des événements sportifs",
    },
  ];

  // Sections du bilan
  const bilanSections: BilanSection[] = [
    {
      id: "technique",
      title: "Bilan Technique",
      content:
        "Au cours de mon BTS SIO option SLAM, j'ai acquis de solides compétences techniques en développement. J'ai maîtrisé plusieurs langages de programmation comme JavaScript, TypeScript, Python et C#, ainsi que des frameworks tels que React, Next.js et Django. J'ai également développé une expertise en intégration front-end avec Tailwind CSS, en création d'API REST, et en gestion de bases de données. Ces compétences m'ont permis de réaliser des projets web complets, des applications mobiles, et des sites e-commerce professionnels.",
    },
    {
      id: "professionnel",
      title: "Bilan Professionnel",
      content:
        "Mon alternance chez Snowpact a été extrêmement enrichissante sur le plan professionnel. J'ai intégré une équipe dynamique et ai participé à de nombreux projets clients variés. Cette expérience m'a familiarisé avec les méthodes de travail agiles, la gestion de projet en équipe, et la relation client. J'ai appris à respecter des délais, à m'adapter rapidement aux exigences changeantes et à communiquer efficacement avec les différentes parties prenantes. Ces compétences professionnelles complètent mes connaissances techniques et me permettent d'être opérationnel dans un environnement de travail exigeant.",
    },
    {
      id: "personnel",
      title: "Bilan Personnel",
      content:
        "Sur le plan personnel, ces deux années de BTS m'ont permis de développer ma confiance en moi, mon autonomie et ma capacité d'adaptation. J'ai appris à gérer mon temps entre les cours et l'entreprise, à être proactif dans mon apprentissage et à m'autoformer sur de nouvelles technologies. La réalisation de projets concrets m'a donné une grande satisfaction et m'a confirmé ma passion pour le développement informatique. J'ai également développé de solides compétences en communication et en travail d'équipe, essentielles dans ce métier. Cette formation a renforcé ma détermination à poursuivre dans ce domaine en constante évolution.",
    },
    {
      id: "perspectives",
      title: "Perspectives d'Avenir",
      content:
        "À l'issue de mon BTS, je souhaite continuer à développer mes compétences, notamment en approfondissant mes connaissances en développement mobile et en intelligence artificielle. Je suis particulièrement intéressé par le développement d'applications avec React Native et l'intégration de solutions IA dans les projets web. À plus long terme, j'envisage d'évoluer vers un poste de développeur fullstack senior ou de lead developer, où je pourrai contribuer à la conception technique de projets d'envergure. Je reste également ouvert aux opportunités d'entrepreneuriat dans le secteur du développement web et mobile.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // Fonction pour afficher la barre de niveau de compétence
  const SkillBar = ({ level, name }: { level: number; name: string }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-white">{name}</span>
        <span className="text-sm font-medium text-white">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full"
          style={{ width: `${level}%`, transition: "width 1s ease-in-out" }}
        ></div>
      </div>
    </div>
  );

  return (
    <PublicLayout>
      <div className="relative">
        {/* Neon Blurs en arrière-plan */}
        <div className="fixed inset-0 pointer-events-none">
          <NeonBlur customPosition="absolute bg-purple-600 opacity-20 left-[10em] top-[30em]" />
          <NeonBlur customPosition="absolute bg-blue-600 opacity-20 right-[10em] top-[10em]" />
          <NeonBlur customPosition="absolute bg-pink-600 opacity-20 left-[20em] bottom-[10em]" />
        </div>

        <div
          ref={componentRef}
          className="container mx-auto px-4 py-24 min-h-screen"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Typography variant="componentTitle" animated>
              Mon{" "}
              <span className="text-gradient-to-r from-[#D932F7] to-[#32D572]">
                Bilan
              </span>{" "}
              BTS SIO
            </Typography>
            <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
              Ce bilan résume mes deux années de BTS SIO option SLAM, mon
              alternance chez Snowpact, et les compétences que j'ai acquises
              pour devenir développeur.
            </p>
          </motion.div>

          {/* Navigation par onglets */}
          <div className="flex justify-center mb-12 border-b border-gray-800">
            <button
              onClick={() => setActiveTab("competences")}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === "competences"
                  ? "text-purple-400 border-b-2 border-purple-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Compétences
            </button>
            <button
              onClick={() => setActiveTab("experiences")}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === "experiences"
                  ? "text-blue-400 border-b-2 border-blue-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Expériences
            </button>
            <button
              onClick={() => setActiveTab("bilan")}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === "bilan"
                  ? "text-pink-400 border-b-2 border-pink-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Bilan
            </button>
          </div>

          {/* Contenu des onglets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-xl"
          >
            {/* Onglet Compétences */}
            {activeTab === "competences" && (
              <div className="grid md:grid-cols-2 gap-12">
                {/* Compétences techniques */}
                <div>
                  <Typography
                    variant="h2"
                    weight="bold"
                    color="white"
                    marginClassName="mb-6"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Compétences Techniques
                    </span>
                  </Typography>
                  <div className="space-y-6">
                    {competences.map((competence, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <SkillBar
                          level={competence.level}
                          name={competence.name}
                        />
                        <p className="text-gray-400 text-sm mt-1 mb-4">
                          {competence.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Statistiques et graphique */}
                <div className="bg-gray-900/40 rounded-lg p-6 border border-gray-800">
                  <Typography
                    variant="h2"
                    weight="bold"
                    color="white"
                    marginClassName="mb-6"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                      Statistiques
                    </span>
                  </Typography>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-300">Projets réalisés</span>
                      <span className="text-white font-bold">15+</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-300">
                        Heures de développement
                      </span>
                      <span className="text-white font-bold">1200+</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-300">Commits GitHub</span>
                      <span className="text-white font-bold">800+</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-300">
                        Technologies maîtrisées
                      </span>
                      <span className="text-white font-bold">12+</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Typography
                      variant="h3"
                      color="white"
                      marginClassName="mb-4"
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
                        Mon évolution
                      </span>
                    </Typography>
                    <p className="text-gray-300 mb-4">
                      J'ai commencé mon BTS avec des connaissances limitées en
                      programmation. Aujourd'hui, je suis capable de développer
                      des applications web complètes, en utilisant les
                      technologies les plus récentes et les meilleures pratiques
                      du marché.
                    </p>
                    <div className="relative h-12 bg-gray-800 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex">
                        <div
                          className="bg-purple-900/60 w-[20%] h-full"
                          title="Début de formation"
                        ></div>
                        <div
                          className="bg-purple-700/60 w-[30%] h-full"
                          title="Premiers projets"
                        ></div>
                        <div
                          className="bg-purple-500/60 w-[20%] h-full"
                          title="Alternance"
                        ></div>
                        <div
                          className="bg-purple-300/60 w-[30%] h-full"
                          title="Projets avancés"
                        ></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-between px-4 text-xs text-white">
                        <span>Début BTS</span>
                        <span>Niveau actuel</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Onglet Expériences */}
            {activeTab === "experiences" && (
              <div>
                <Typography
                  variant="h2"
                  weight="bold"
                  color="white"
                  marginClassName="mb-8"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    Mes Expériences Significatives
                  </span>
                </Typography>

                <div className="space-y-12">
                  {/* Alternance */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-lg border border-purple-800/30"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="bg-purple-800/20 rounded-full p-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">
                          Alternance chez Snowpact
                        </h3>
                        <p className="text-purple-300 mb-2">
                          2023-2025 • Développeur Web
                        </p>
                        <p className="text-gray-300">
                          Durant mon alternance chez Snowpact, j'ai participé au
                          développement de nombreux projets clients, notamment
                          des sites web, des applications mobiles et des
                          plateformes e-commerce. J'ai travaillé principalement
                          avec React, Next.js et Tailwind CSS pour le front-end,
                          ainsi qu'avec Node.js pour le back-end. Cette
                          expérience m'a permis de développer mes compétences
                          techniques, mais aussi de comprendre les enjeux
                          business et de travailler en équipe dans un
                          environnement professionnel.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="bg-purple-900/40 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-700/40">
                            React
                          </span>
                          <span className="bg-purple-900/40 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-700/40">
                            Next.js
                          </span>
                          <span className="bg-purple-900/40 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-700/40">
                            Tailwind
                          </span>
                          <span className="bg-purple-900/40 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-700/40">
                            Node.js
                          </span>
                          <span className="bg-purple-900/40 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-700/40">
                            SEO
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Projets marquants */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                        className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6 rounded-lg border border-blue-800/30"
                      >
                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-blue-300 mb-2">{exp.date}</p>
                        <p className="text-gray-300">{exp.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Certifications */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="bg-gradient-to-r from-green-900/20 to-teal-900/20 p-6 rounded-lg border border-green-800/30"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="bg-green-800/20 rounded-full p-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">
                          Certifications & Formations
                        </h3>
                        <p className="text-green-300 mb-2">2023-2025</p>
                        <p className="text-gray-300">
                          En parallèle de mon BTS et de mon alternance, j'ai
                          obtenu plusieurs certifications qui ont complété ma
                          formation académique. Ces certifications attestent de
                          mes compétences dans différents domaines et
                          technologies.
                        </p>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-black/30 p-4 rounded-lg border border-green-800/40">
                            <h4 className="text-white font-medium">
                              Certification PIX
                            </h4>
                            <p className="text-gray-400 text-sm">
                              Compétences numériques
                            </p>
                          </div>
                          <div className="bg-black/30 p-4 rounded-lg border border-green-800/40">
                            <h4 className="text-white font-medium">CNIL</h4>
                            <p className="text-gray-400 text-sm">
                              Protection des données
                            </p>
                          </div>
                          <div className="bg-black/30 p-4 rounded-lg border border-green-800/40">
                            <h4 className="text-white font-medium">Udemy</h4>
                            <p className="text-gray-400 text-sm">
                              Développement web avancé
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Onglet Bilan */}
            {activeTab === "bilan" && (
              <div>
                <Typography
                  variant="h2"
                  weight="bold"
                  color="white"
                  marginClassName="mb-8"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
                    Bilan de ma Formation
                  </span>
                </Typography>

                <div className="grid md:grid-cols-2 gap-8">
                  {bilanSections.map((section, index) => (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-black/50 p-6 rounded-lg border border-gray-800"
                    >
                      <h3 className="text-xl font-bold text-white mb-4">
                        {section.title}
                      </h3>
                      <p className="text-gray-300">{section.content}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-12 text-center"
                >
                  <Typography
                    variant="h3"
                    weight="bold"
                    color="white"
                    marginClassName="mb-4"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      Conclusion
                    </span>
                  </Typography>
                  <p className="text-gray-300 max-w-3xl mx-auto">
                    Ces deux années de BTS SIO et d'alternance chez Snowpact ont
                    constitué une expérience extrêmement enrichissante. J'ai
                    acquis de solides compétences techniques, professionnelles
                    et personnelles qui me permettent aujourd'hui d'être
                    confiant pour la suite de ma carrière dans le développement
                    web. Je suis reconnaissant pour toutes les opportunités
                    d'apprentissage que j'ai eues et je suis enthousiaste à
                    l'idée de continuer à me développer dans ce domaine
                    passionnant.
                  </p>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </PublicLayout>
  );
};
