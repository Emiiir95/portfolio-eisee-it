import { Typography } from "@/components/atoms/Typography/Typography";
import htmlIcon from "@/assets/images/tech_emir/htmlIcon.webp";
import cssIcon from "@/assets/images/tech_emir/cssIcon.webp";
import javaIcon from "@/assets/images/tech_emir/javaIcon.webp";
import cIcon from "@/assets/images/tech_emir/cIcon.webp";
import canvaIcon from "@/assets/images/tech_emir/canvaIcon.webp";
import capcutIcon from "@/assets/images/tech_emir/capcutIcon.webp";
import pythonIcon from "@/assets/images/tech_emir/pythonIcon.webp";
import djangoIcon from "@/assets/images/tech_emir/djangoIcon.webp";
import jsIcon from "@/assets/images/tech_emir/jsIcon.webp";
import tsIcon from "@/assets/images/tech_emir/tsIcon.webp";
import reactIcon from "@/assets/images/tech_emir/reactIcon.webp";
import nextIcon from "@/assets/images/tech_emir/nextIcon.webp";
import figmaIcon from "@/assets/images/tech_emir/figmaIcon.webp";
import tailwindIcon from "@/assets/images/tech_emir/tailwindIcon.webp";

const icons = [
  { imgSrc: htmlIcon, altText: "HTML Icon" },
  { imgSrc: cssIcon, altText: "CSS Icon" },
  { imgSrc: pythonIcon, altText: "Python Icon" },
  { imgSrc: djangoIcon, altText: "Django Icon" },
  { imgSrc: javaIcon, altText: "Java Icon" },
  { imgSrc: cIcon, altText: "C# Icon" },
  { imgSrc: jsIcon, altText: "Javascript Icon" },
  { imgSrc: tsIcon, altText: "Typescript Icon" },
  { imgSrc: reactIcon, altText: "React Icon" },
  { imgSrc: nextIcon, altText: "Next.js Icon" },
  { imgSrc: figmaIcon, altText: "Figma Icon" },
  { imgSrc: canvaIcon, altText: "Canva Icon" },
  { imgSrc: capcutIcon, altText: "Capcut Icon" },
  { imgSrc: tailwindIcon, altText: "Capcut Icon" },
];

export function CompetenceComponent() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Typography
        align="center"
        customClassName="md:mb-20 mb-10"
        variant="componentTitle"
        color="white"
        animated
      >
        Mes <span className="text-[rgb(0,183,255)]">compétences</span>
      </Typography>

      <div className="bg-gradient-to-b from-[rgb(0,183,255)] to-[rgb(255,48,255)] md:p-5 px-[1px] py-5 w-auto h-auto flex rounded-[20px] flex-wrap justify-center gap-9">
        {icons.map(
          (icon, index) =>
            icon.imgSrc && (
              <img
                key={index}
                src={icon.imgSrc}
                className="md:w-32 w-20 hover:animate-jump"
                alt={icon.altText}
              />
            ),
        )}
      </div>
    </div>
  );
}
