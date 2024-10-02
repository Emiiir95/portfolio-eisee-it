import { Button } from "@/components/ui/button";
import { Typography } from "../Typography/Typography";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "react-router-dom";

interface ProjetDrawerProps {
  name: string;
  year: string;
  description: string;
  image?: string;
  link?: string;
}

export const ProjetDrawer = ({ name, year, image, link, description }: ProjetDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="w-52 h-30 bg-gradient-to-br from-[#F76E4B] via-[#E24960] to-[#C51D7D] p-4 rounded-3xl flex flex-col items-center gap-2">
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

      <DrawerContent >
        <DrawerHeader className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-20 md:mx-11">
          <div className="md:w-1/3 flex flex-col items-center">
            <Typography color="white" variant="componentTitle" align="center">{name}</Typography>
            <div className="flex flex-row gap-4 mt-5">
              <Link target="_blank" to={link ? `https://${link}` : 'https://signaleo.co'}>
                <Button size="lg" className="border-[#27272A] border-2 bg-black">{link}</Button>
              </Link>
              <DrawerClose asChild>
                <Button size="lg" variant="outline">Retour</Button>
              </DrawerClose>
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <Typography color="white" variant="h2">Description</Typography>
                <div className="border-2 w-1/4 border-gray-300"/>
                <Typography color="lightGray">{description}</Typography>

              </div>
              <div>
                <Typography color="white" variant="h2">Public ciblé par le projet</Typography>
                <div className="border-2 w-1/4 border-gray-300"/>
                <Typography color="lightGray">Mairies / Citoyens</Typography>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <Typography color="white" variant="h2">Mission</Typography>
                <div className="border-2 w-1/4 border-gray-300"/>
                <Typography color="lightGray">Durée de la mission, ma mission, temps</Typography>
              </div>
              <div>
                <Typography color="white" variant="h2">Technologies</Typography>
                <div className="border-2 w-1/4 border-gray-300"/>
                <Typography color="lightGray">npm, react</Typography>
              </div>
            </div>
          </div>
        </DrawerHeader>
        <DrawerFooter />
      </DrawerContent>
    </Drawer>
  );
};
