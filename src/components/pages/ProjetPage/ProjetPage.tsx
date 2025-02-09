import { PresentationProjet } from "@/components/organisms/PresentationProjet";
import { ProjetBlock } from "@/components/organisms/ProjetBlock";
import { PublicLayout } from "@/components/templates/PublicLayout";
import fond from "@/assets/images/fond.webp";

export const ProjetPage = () => {
  return (
    <PublicLayout>
      <img
        src={fond}
        className="fixed w-[60%] h-[60%] z-0 -right-20 -top-32 pointer-events-none"
        alt="Fond"
      />
      <img
        src={fond}
        className="fixed w-[60%] h-[60%] z-0 -left-20 bottom-72 pointer-events-none"
        alt="Fond"
      />
      <PresentationProjet />
      <div className="flex items-center justify-center flex-col z-30 mt-20 md:mt-40">
        <ProjetBlock />
      </div>
    </PublicLayout>
  );
};
