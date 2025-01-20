import { PresentationProjet } from "@/components/organisms/PresentationProjet";
import { ProjetBlock } from "@/components/organisms/ProjetBlock";
import { PublicLayout } from "@/components/templates/PublicLayout";
import fond from "@/assets/images/fond.png";

export const ProjetPage = () => {
  return (
    <PublicLayout>
      <div className="relative">
        <img
          src={fond}
          className="absolute w-[60%] h-[60%] z-0 right-0 top-32"
        />
        <img
          src={fond}
          className="absolute w-[60%] h-[60%] z-0 left-0 bottom-52"
        />
        <PresentationProjet />

        <div className="flex items-center justify-center flex-col z-50 mt-20 md:mt-40">
          <div className="mt-12">
            <ProjetBlock />
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};
