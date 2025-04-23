import { Typography } from "@/components/atoms/Typography/Typography";
import pixLogo from "@/assets/images/pix-logo.webp";
// import cnilLogo from "@/assets/images/cnil-logo.webp";
import udemyLogo from "@/assets/images/logoUdemy.webp";
import { CertificationsCard } from "@/components/atoms/CertificationsCard/CertificationsCard";
import certificationPix from "@/assets/document/attestation-pix.pdf";
import certificationSQL from "@/assets/document/Certif_SQL.png";
import certificationWP from "@/assets/document/Certif_WP.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CardContent } from "@mui/material";

const certificationData = [
  // {
  //   logo: cnilLogo,
  //   pdf: "",
  //   description:
  //     "Cet atelier présente les principes du Règlement Général sur la Protection des Données (RGPD), en abordant les droits des personnes et les obligations des responsables de traitement pour assurer la conformité.",
  // },
  {
    logo: udemyLogo,
    pdf: certificationSQL,
    description:
      "Maîtrise des bases du langage SQL, de la gestion de bases de données et des requêtes.",
  },
  {
    logo: pixLogo,
    pdf: certificationPix,
    description:
      "Compétences numériques en données, communication, création de contenu, sécurité et environnement numérique. Elle est reconnue dans les domaines scolaires et professionnels.",
  },
  {
    logo: udemyLogo,
    pdf: certificationWP,
    description:
      "Compétences en création et gestion de sites web sans coder. Elle couvre l’installation, les thèmes, les plugins et l’optimisation du site.",
  },
];

export function CertificationComponent() {
  // const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col justify-center items-center">
      <Typography
        align="center"
        variant="componentTitle"
        color="white"
        animated
        customClassName="mb-10"
      >
        Mes <span className="text-[#F600FF]">certifications</span>
      </Typography>

      <Carousel
        opts={{
          align: "start",
        }}
        className="lg:max-w-7xl md:max-w-2xl max-w-80"
      >
        <CarouselContent>
          {certificationData.map((certification, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/3">
              <div className="p-1">
                <CardContent className="flex aspect-square items-center justify-center">
                  <CertificationsCard
                    index={index}
                    logo={certification.logo}
                    question="De quoi s'agit-il ?"
                    certification={certification.pdf}
                    description={certification.description}
                  />
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* {isMobile === false && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )} */}
      </Carousel>
    </div>
  );
}
