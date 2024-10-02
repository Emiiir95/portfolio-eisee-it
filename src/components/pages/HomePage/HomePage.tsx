import { PublicLayout } from "@/components/templates/PublicLayout"
import { Hero } from "@/components/organisms/Hero"
import { Contribution } from "@/components/organisms/Contribution"
import { Typography } from "@/components/atoms/Typography/Typography"
import { Button } from "@/components/ui/button"


export function HomePage() {

  return (
    <PublicLayout>
      <Hero/>
      <div className="flex items-center justify-center mt-20 flex-col">

        <section className="bg-[#27272A] w-full p-11 flex gap-10 flex-col">
          <div className="w-[30%] leading-[38px]">
          <Typography color="white" variant="componentTitle">À propos de moi</Typography>
            <Typography color="white">Je me présente, Dylan CHAU, technicien informatique âgé de 20 ans passionné par les nouvelles technologies, le sport et l'automobile. Je suis actuellement étudiant en BTS SIO SISR en alternance chez Burger King France.</Typography>
          </div>
          <div>
            <Button variant="outline">Mon CV</Button>
          </div>
        </section>
        
        <section className="w-[60%] h-auto mx-60 mt-20 gap-10 flex flex-col"> 
          <Typography align="center" variant="componentTitle" color="white">Mes travaux durant mon BTS</Typography>
           <Contribution/> 
        </section>
        
        <section className="w-[60%] h-auto mx-60 mt-20 gap-10 flex flex-col"> 
          <Typography align="center" variant="componentTitle" color="white">Mon parcours</Typography>
        </section>
        
      </div>
    </PublicLayout>
  )
}
