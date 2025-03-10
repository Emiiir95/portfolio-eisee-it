import { useParams } from "react-router-dom";
import { realisationsProfessionnels } from "./realisationsData";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { ProjectProuve } from "@/components/organisms/ProjectProuve";
import { ProjectHeader } from "@/components/organisms/ProjectHeader";
import { ProjectTeam } from "@/components/organisms/ProjectTeam";
import { TextWithIcon } from "@/components/organisms/TextWithIcon";
import { ProjectStat } from "@/components/organisms/ProjectStat";

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
      <ProjectTeam teams={realisation.dataPage.teams} />
      <TextWithIcon tab={realisation.dataPage.donorSpaceInfo} />
      <ProjectProuve
        platforms={realisation.dataPage.platforms}
        title="Aperçu du projet"
      />
      <ProjectStat stats={realisation.dataPage.stats} />

      <div className="text-white">But/ bjectif du projet et bilan</div>
    </PublicLayout>
  );
}
