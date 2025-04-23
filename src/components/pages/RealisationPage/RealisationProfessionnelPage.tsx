import { useParams } from "react-router-dom";
import { realisationsProfessionnels } from "./realisationsData";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { ProjectProuve } from "@/components/organisms/ProjectProuve";
import { ProjectHeader } from "@/components/organisms/ProjectHeader";
import { ProjectTeam } from "@/components/organisms/ProjectTeam";
import { TextWithIcon } from "@/components/organisms/TextWithIcon";
import { ProjectStat } from "@/components/organisms/ProjectStat";
import { ProjectSummary } from "@/components/organisms/ProjectSummary";
import { NeonBlur } from "@/components/atoms/NeonBlur";

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
      <div className="relative z-10">
        <NeonBlur customPosition="absolute right-20 top-[10em]" />
        <NeonBlur
          customPosition="absolute bottom-0 top-1/2"
          customColor="bg-[#18ACFF]"
        />
        <NeonBlur
          customPosition="absolute right-0 bottom-0"
          customColor="bg-[#209]"
        />
        <ProjectHeader realisation={realisation} />
        <ProjectProuve
          platforms={realisation.dataPage.platforms}
          title="Aperçu du projet"
        />
        {realisation.dataPage.teams && (
          <ProjectTeam teams={realisation.dataPage.teams} />
        )}
        {realisation.dataPage.donorSpaceInfo && (
          <TextWithIcon tab={realisation.dataPage.donorSpaceInfo} />
        )}
        {realisation.dataPage.stats && (
          <ProjectStat stats={realisation.dataPage.stats} />
        )}
        <ProjectSummary dataPage={realisation.Summary} />
      </div>
    </PublicLayout>
  );
}
