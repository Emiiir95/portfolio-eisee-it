import { PublicLayout } from "@/components/templates/PublicLayout"
import { Hero } from "@/components/organisms/Hero"
import { Contribution } from "@/components/organisms/Contribution"
import { SocialComponentVertical, } from "@/components/organisms/SocialComponent"
import { useMediaQuery } from "@mui/material"

import header from '@/assets/images/headerPortfolio.png';
import headerMobile from '@/assets/images/headerMobile.png';
import emircv from "@/assets/document/CV_SEN_Emir.pdf"
import { ParcoursComponent } from "@/components/organisms/ParcoursComponent"
import { CertificationComponent } from "@/components/organisms/CertificationComponent"

import { CVComponent } from "@/components/atoms/CVComponent"
import { SocialVertical } from "@/components/organisms/SocialVertical"
import { CompetenceComponent } from "@/components/organisms/CompetenceComponent"

export function HomePage() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <PublicLayout>
      <Hero img={isMobile ? headerMobile : header} />
      {isMobile === false && (
        <section className="fixed bottom-10 right-10">
          <SocialComponentVertical />
        </section>
      )}
      
      <section className="mt-10 flex justify-center">
        <SocialVertical/>
      </section>

      <CVComponent download={emircv} description="Bonjour, je m'appelle Emir Sen, j'ai 19 ans et je suis actuellement en BTS SIO, option SLAM. Passionné par l'informatique depuis toujours, je me spécialise dans le développement web et les sites internet."/>
      
      <section className="flex items-center justify-center flex-col gap-20 md:gap-44 md:mx-60 mx-10 mt-32">
        <ParcoursComponent />
        <Contribution/> 
        <CompetenceComponent/>
        <CertificationComponent />
      </section>


    </PublicLayout>
  )
}        