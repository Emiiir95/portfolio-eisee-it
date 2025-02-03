import { useParams } from "react-router-dom";
import { realisationsProfessionnels } from "./realisationsData";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { ProjectProuve } from "@/components/organisms/ProjectProuve";
import { ProjectHeader } from "@/components/organisms/ProjectHeader";
import hero from "@/assets/images/headerPortfolio.png";
import farid from "@/assets/images/avatar/farid.webp";
import { ProjectTeam } from "@/components/organisms/ProjectTeam";
import { TextWithIcon } from "@/components/organisms/TextWithIcon";
import { MdArchitecture } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

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
      <ProjectHeader realisation={realisation} />
      <ProjectTeam teams={teams} />
      <TextWithIcon tab={DonorSpaceInfo} />

      <ProjectProuve platforms={platformsData} title="test" />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Pour résumé ce projet
              </h2>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm/6 font-semibold text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

const platformsData = [
  { name: "figma", image: hero },
  { name: "Platform 1", image: hero },
  { name: "Platform 1", image: hero },
  { name: "Platform 2", image: hero },
];
const teams = [
  { avatar: farid, name: "figma", job: "hero" },
  { avatar: farid, name: "Platform 1", job: "hero" },
  { avatar: farid, name: "Platform 1", job: "hero" },
  { avatar: farid, name: "Platform 2", job: "hero" },
];

const stats = [
  { id: 1, name: "Commit", value: "800" },
  { id: 2, name: "Composants developper", value: "30" },
  { id: 3, name: "Pages", value: "14" },
  { id: 4, name: "Semaines", value: "2" },
];

const DonorSpaceInfo = [
  {
    icon: MdArchitecture,
    alt: "building",
    label: "Architecture",
  },
  {
    icon: FaCode,
    alt: "credit card",
    label: "Développeur front",
  },
  {
    icon: FaMagnifyingGlass,
    alt: "gift",
    label: "SEO",
  },
];
