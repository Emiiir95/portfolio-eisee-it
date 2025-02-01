import { RealisationProfessionnelPage } from "@/components/pages/RealisationPage";
import { RealisationScolairePage } from "@/components/pages/RealisationPage/RealisationScolairePage";
import { useParams } from "react-router-dom";
import {
  realisationsProfessionnels,
  realisationsScolaires,
} from "@/components/pages/RealisationPage/realisationsData";

export const RealisationPage = () => {
  const { url } = useParams();

  const realisationPro = realisationsProfessionnels.find(
    (item) => item.url === url,
  );
  const realisationSco = realisationsScolaires.find((item) => item.url === url);

  if (realisationPro) {
    return <RealisationProfessionnelPage />;
  }

  if (realisationSco) {
    return <RealisationScolairePage />;
  }

  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <h1 className="text-red-500 text-2xl font-bold">Aucun projet trouvé.</h1>
    </div>
  );
};
