import { PublicLayout } from "@/components/templates/PublicLayout";
import { Contribution } from "@/components/organisms/Contribution";
import emircv from "@/assets/document/CV_SEN_Emir.pdf";
import { CertificationComponent } from "@/components/organisms/CertificationComponent";
import { CVComponent } from "@/components/atoms/CVComponent";
import { CompetenceComponent } from "@/components/organisms/CompetenceComponent";
import { NeonBlur } from "@/components/atoms/NeonBlur";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import "./home.css";
import emir from "@/assets/images/avataaars.png";
import { Timeline } from "@/components/organisms/Timeline";

export function HomePage() {
  return (
    <PublicLayout>
      <BackgroundBeamsWithCollision className="flex sm:flex-row flex-col-reverse">
        <img src={emir} className="sm:pr-10" />
        <div className="typewriter sm:pr-32">
          <h1>Portfolio Emir</h1>
        </div>
      </BackgroundBeamsWithCollision>

      <CVComponent
        download={emircv}
        description="Bonjour, je m'appelle Emir Sen, j'ai 20 ans et je suis actuellement en BTS SIO, option SLAM. Passionné par l'informatique depuis toujours, je me spécialise dans le développement web et les sites internet."
      />
      <Timeline />

      <section className="relative">
        {/* Effet de fond NeonBlur */}
        <NeonBlur customPosition="absolute -left-32 top-[50em]" />
        <NeonBlur
          customPosition="absolute -right-0 top-[10em]"
          customColor="bg-[#209]"
        />
        <NeonBlur
          customPosition="absolute -right-0 bottom-0"
          customColor="bg-[#18ACFF]"
        />

        {/* Contenu au premier plan */}
        <div className="relative flex flex-col items-center justify-center gap-20 md:gap-44 md:mx-60 mx-10 mt-32">
          {/* <ParcoursComponent /> */}
          <Contribution />
          <CompetenceComponent />
          <CertificationComponent />
        </div>
      </section>
    </PublicLayout>
  );
}
