import { useParams } from "react-router-dom";
import { realisationsScolaires } from "./realisationsData";
import { PublicLayout } from "@/components/templates/PublicLayout";
import { ProjectProuve } from "@/components/organisms/ProjectProuve";
import { ProjectHeader } from "@/components/organisms/ProjectHeader";
// import { TextWithIcon } from "@/components/organisms/TextWithIcon";
import { ProjectStat } from "@/components/organisms/ProjectStat";
import { ProjectDocument } from "@/components/organisms/ProjectDocument";
import { ProjectSummary } from "@/components/organisms/ProjectSummary";
import { NeonBlur } from "@/components/atoms/NeonBlur";

export function RealisationScolairePage() {
  const { url } = useParams();

  const realisation = realisationsScolaires.find((rea) => rea.url === url);

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
          {realisation.document && realisation.document.length > 0 && (
            <ProjectDocument
              documents={realisation.document}
              title="Documentation du projet"
            />
          )}
          <ProjectProuve
            platforms={realisation.platforms}
            title="Aperçu du projet"
          />

          <ProjectStat stats={realisation.stats} />
          <ProjectSummary dataPage={realisation.dataPage} />
        </div>
      </PublicLayout>
    </PublicLayout>
  );
}
