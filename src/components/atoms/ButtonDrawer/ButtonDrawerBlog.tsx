import { Button, ButtonProps } from "@mui/material";
import { Button as ButtonClose } from "@/components/ui/button";
import { Typography } from "../Typography/Typography";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "react-router-dom";

interface ButtonDrawerBlogProps {
  buttonColor?: ButtonProps["color"];
  buttonLabel: string;
  articleTitle: string;
  articleResume: string;
  articleDate: string;
  articleAuthor: string;
  articleLink: string;
}

export function ButtonDrawerBlog({
  buttonColor = "warning",
  buttonLabel,
  articleTitle,
  articleResume,
  articleDate,
  articleAuthor,
  articleLink,
}: ButtonDrawerBlogProps) {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="outlined" className="mt-2" color={buttonColor}>
          {buttonLabel}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <Typography
            color="white"
            variant="componentSmallTitle"
            weight="extrabold"
          >
            {articleTitle}
          </Typography>
          <div className="p-4">
            <Typography
              color="white"
              variant="h2"
              transform="uppercase"
              customClassName="underline"
              weight="bold"
            >
              Résumé
            </Typography>
            <Typography color="lightGray">{articleResume}</Typography>
          </div>
          <Typography color="white" variant="formTitle" weight="bold">
            {articleDate} • {articleAuthor}
          </Typography>
          <div className="flex justify-center flex-row gap-4 md:mt-5 mt-3">
            <Link
              className="text-white no-underline"
              target="_blank"
              to={articleLink}
            >
              <ButtonClose
                size="lg"
                className="border-[#27272A] border-2 bg-black"
              >
                Voir l&apos;article
              </ButtonClose>
            </Link>
            <DrawerClose asChild>
              <ButtonClose size="lg" variant="outline">
                Retour
              </ButtonClose>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <DrawerClose />
      </DrawerContent>
    </Drawer>
  );
}
