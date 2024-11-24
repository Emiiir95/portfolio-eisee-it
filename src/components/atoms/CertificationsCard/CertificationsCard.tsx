import { useState } from "react";
import { Button } from "@mui/material";
import { Typography } from "../Typography/Typography";

interface CertificationsCardProps {
  index: number;
  logo: string;
  question: string;
  certification: string;
  description: string;
}

export function CertificationsCard({ index, logo, question, certification, description }: CertificationsCardProps) {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div key={index} className="flex justify-center items-center">
      <div className="[perspective:1000px] md:w-[400px] md:h-[300px] w-[300px] h-[300px]">
        <div
          className={`relative w-full h-full transition-transform duration-[0.8s] [transform-style:preserve-3d] ${
            flippedIndex === index ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Face avant */}
          <div className="p-2 absolute w-full h-full bg-gradient-to-br from-[#ff00ff] to-[#3700ff] rounded-[20px] [backface-visibility:hidden] hover:shadow-[0px_0px_30px_1px_rgba(204,0,255,0.3)]">
            <div className="flex gap-5 flex-col justify-center items-center relative w-full h-full bg-[#1d1724] rounded-[10px] transition-all duration-250 ease-[cubic-bezier(0,0,0,1)] p-5 hover:scale-[0.98] hover:rounded-[18px]">
              <img src={logo} className="w-60 absolute top-14" />

              <div className="absolute bottom-10">
                <Button href={certification} className="hover" target="_blank">
                  Certificat
                </Button>
                <Button onClick={() => toggleFlip(index)} className="hover">
                  {question} 
                </Button>
              </div>
            </div>
          </div>

          {/* Face arrière */}
          <div className="absolute w-full h-full bg-[#1D1724] via-coral to-bisque flex flex-col justify-center items-center shadow-md rounded-xl border border-coral [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <Typography align="center" marginClassName="mt-2" variant="h3" customClassName="text-sm text-gray-500 leading-[1.4] p-5">
              {description}
            </Typography>
            <div>
              <Button className="hover">Certificat</Button>
              <Button onClick={() => toggleFlip(index)} className="hover">
                Retour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
