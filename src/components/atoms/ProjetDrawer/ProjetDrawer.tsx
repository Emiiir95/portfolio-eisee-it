import { Button } from "@/components/ui/button";
import { Typography } from "../Typography/Typography";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "react-router-dom";

interface ProjetDrawerProps {
  name: string;
  year: string;
  description: string;
  publicLabel?: string;
  missionLabel?: string;
  technoLabel?: string;
  tools?: string;
  image?: string;
  link?: string;
}

export const ProjetDrawer = ({ name, year, image, link, description, publicLabel, missionLabel, technoLabel, tools }: ProjetDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="w-52 h-30 bg-gradient-to-br from-[#F27121] via-[#E94057] to-[#8A2487] p-4 rounded-3xl flex flex-col items-center gap-2">
          <div className="w-24 h-24 border-2 border-[#864499] bg-white rounded-2xl flex justify-center items-center">
            <img src={image} className="w-20 h-20 rounded-2xl" alt={name} />
          </div>
          <div>
            <Typography variant="h3" customColorClass="text-lg font-semibold" align="center" color="white">
              {name}
            </Typography>
            <Typography align="center" color="gray">{year}</Typography>
          </div>
        </div>
      </DrawerTrigger>

      <DrawerContent className="md:px-5">
        <DrawerHeader className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-20 md:mx-11">
          <div className="md:w-1/3 flex flex-col items-center">
            <Typography color="white" variant="componentTitle" align="center">{name}</Typography>
            <div className="flex flex-row gap-4 md:mt-5 mt-3">
              <Link target="_blank" to={link ? `https://${link}` : 'https://signaleo.co'}>
                <Button size="lg" className="border-[#27272A] border-2 bg-black">{link}</Button>
              </Link>
              <DrawerClose asChild>
                <Button size="lg" variant="outline">Retour</Button>
              </DrawerClose>
            </div>
          </div>

          <div className="flex flex-col md:gap-8 w-full">
            <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
            <div className="flex items-center flex-col">
                <Typography color="white" variant="h2">Qu'est ce que c'est ?</Typography>
                <div className="border-2 w-1/4 border-gray-300 mb-3"/>
                <Typography color="lightGray">{description}</Typography>
              </div>
              <div className="flex items-center flex-col">
                <Typography color="white" variant="h2">Pour qui ma mission a t-elle servie ?</Typography>
                <div className="border-2 w-1/4 border-gray-300 mb-3"/>
                <Typography color="lightGray">{publicLabel}</Typography>
              </div>
            </div>
            <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
              <div className="flex items-center flex-col">
                <Typography color="white" variant="h2">Ma mission</Typography>
                <div className="border-2 w-1/4 border-gray-300 mb-3"/>
                <Typography color="lightGray">{missionLabel}</Typography>
              </div>
              <div className="flex items-center flex-col">
                <Typography color="white" variant="h2">Technologies</Typography>
                <div className="border-2 w-1/4 border-gray-300 mb-3"/>
                <Typography color="lightGray">{technoLabel}</Typography>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex items-center flex-col">
                <Typography color="white" variant="h2">Outils</Typography>
                <div className="border-2 w-1/5 border-gray-300 mb-3"/>
                <Typography color="lightGray">{tools}</Typography>
              </div>
            </div>
          </div>
          
        </DrawerHeader>
        <DrawerFooter />
      </DrawerContent>
    </Drawer>
  );
};
