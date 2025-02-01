import { PublicLayout } from "@/components/templates/PublicLayout";
import { Hero } from "@/components/organisms/Hero";
import { Contribution } from "@/components/organisms/Contribution";
import { useMediaQuery } from "@mui/material";
import header from "@/assets/images/headerPortfolio.png";
import headerMobile from "@/assets/images/headerMobile.png";
import emircv from "@/assets/document/CV_SEN_Emir.pdf";
import { ParcoursComponent } from "@/components/organisms/ParcoursComponent";
import { CertificationComponent } from "@/components/organisms/CertificationComponent";
import { CVComponent } from "@/components/atoms/CVComponent";
import { CompetenceComponent } from "@/components/organisms/CompetenceComponent";
import { SocialHorizontal } from "@/components/organisms/SocialHorizontal";
import { NeonBlur } from "@/components/atoms/NeonBlur";

export function HomePage() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <PublicLayout>
      <Hero img={isMobile ? headerMobile : header} />

      <section className="mt-10 flex justify-center">
        <SocialHorizontal />
      </section>

      <CVComponent
        download={emircv}
        description="Bonjour, je m'appelle Emir Sen, j'ai 19 ans et je suis actuellement en BTS SIO, option SLAM. Passionné par l'informatique depuis toujours, je me spécialise dans le développement web et les sites internet."
      />

      <section className="relative">
        {/* Effet de fond NeonBlur */}
        <NeonBlur customPosition="absolute -left-32 top-[50em]" />
        <NeonBlur customPosition="absolute bg-[#209] -right-0 top-[10em]" />
        <NeonBlur customPosition="absolute bg-[#18ACFF] -right-0 bottom-[20em]" />

        {/* Contenu au premier plan */}
        <div className="relative flex flex-col items-center justify-center gap-20 md:gap-44 md:mx-60 mx-10 mt-32">
          <ParcoursComponent />
          <Contribution />
          <CompetenceComponent />
          <CertificationComponent />
        </div>
      </section>
    </PublicLayout>
  );
}
