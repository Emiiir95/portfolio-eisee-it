import { Typography } from "@/components/atoms/Typography/Typography";
import pixLogo from "@/assets/images/pix-logo.png";
import cnilLogo from "@/assets/images/cnil-logo.png";
import udemyLogo from "@/assets/images/logoUdemy.png";
import { CertificationsCard } from "@/components/atoms/CertificationsCard/CertificationsCard";
import certificationPix from "@/assets/document/attestation-pix.pdf";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent, useMediaQuery } from "@mui/material";

const certificationData = [
  {
    logo: pixLogo,
    pdf: certificationPix,
    description:
      "Pix est une certification officielle qui évalue les compétences numériques, reconnue en France. Elle couvre la gestion de données, la sécurité, la communication et la création de contenu numérique.",
  },
  {
    logo: cnilLogo,
    pdf: "",
    description:
      "Cet atelier présente les principes du Règlement Général sur la Protection des Données (RGPD), en abordant les droits des personnes et les obligations des responsables de traitement pour assurer la conformité.",
  },
  {
    logo: udemyLogo,
    pdf: "",
    description:
      "Udemy est une plateforme en ligne offrant des milliers de cours créés par des experts, permettant aux utilisateurs d'apprendre à leur rythme dans divers domaines comme la technologie, le business et le développement personnel.",
  },
  {
    logo: "",
    pdf: "",
    description:
      "Cette certification évalue les compétences en cybersécurité, abordant les enjeux de sécurité des systèmes d'information, les bonnes pratiques et les méthodes de protection contre les cybermenaces.",
  },
  {
    logo: "",
    pdf: "",
    description:
      "Ce MOOC aborde les principes de la protection du secret défense, en sensibilisant aux enjeux de sécurité, aux réglementations applicables et aux pratiques de gestion des informations sensibles.",
  },
  {
    logo: "",
    pdf: "",
    description:
      "Ce MOOC sensibilise aux risques de cybermalveillance, en présentant les stratégies de prévention, les méthodes d'attaque et les bonnes pratiques pour sécuriser les systèmes d'information.",
  },
];

export function CertificationComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col justify-center items-center">
      <Typography
        align="center"
        variant="componentTitle"
        color="white"
        animated
        customClassName="md:mb-20 mb-10"
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
        {isMobile === false && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
}
