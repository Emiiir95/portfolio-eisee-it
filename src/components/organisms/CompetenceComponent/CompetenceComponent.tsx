import { Typography } from '@/components/atoms/Typography/Typography';

import htmlIcon from '@/assets/images/tech_emir/htmlIcon.png';
import cssIcon from '@/assets/images/tech_emir/cssIcon.png';
import javaIcon from '@/assets/images/tech_emir/javaIcon.png';
import cIcon from '@/assets/images/tech_emir/cIcon.png';
import canvaIcon from '@/assets/images/tech_emir/canvaIcon.png';
import capcutIcon from '@/assets/images/tech_emir/capcutIcon.png';
import pythonIcon from '@/assets/images/tech_emir/pythonIcon.png';
import djangoIcon from '@/assets/images/tech_emir/djangoIcon.png';
import jsIcon from '@/assets/images/tech_emir/jsIcon.png';
import tsIcon from '@/assets/images/tech_emir/tsIcon.png';
import reactIcon from '@/assets/images/tech_emir/reactIcon.png';
import nextIcon from '@/assets/images/tech_emir/nextIcon.png';
import figmaIcon from '@/assets/images/tech_emir/figmaIcon.png';

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
];

export function CompetenceComponent() {
  return (
    <div className="flex items-center justify-center flex-col">
      <style>{`
        .competenceCard::before {
          content: '';
          position: absolute;
          width: 1000%;
          height: 1000%;
          background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
          animation: rotBGimg 5s linear infinite;
          transition: all 0.2s linear;
          z-index: 1;
          top: -450%;
          left: -450%;
          border-radius: 50%;
        }

        @keyframes rotBGimg {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .sliding-animation {
          animation: sliding 5s infinite linear;
          z-index: 2;
        }

        @keyframes sliding {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-101%);
          }
        }
      `}</style>

      <Typography 
        align="center" 
        customClassName="md:mb-20 mb-10"
        variant="componentTitle" 
        color="white" 
        animated
      >
        Mes compétences
      </Typography>

      <div className="competenceCard w-auto h-auto mx-10 bg-[#07182E] relative flex place-content-center place-items-center overflow-hidden rounded-[20px]">
        {icons.map((icon, index) => (
          icon.imgSrc && (
            <img
              key={index}
              src={icon.imgSrc}
              className="sliding-animation w-[180px] p-5 z-10"
              alt={icon.altText}
            />
          )
        ))}
      </div>
    </div>
  );
}