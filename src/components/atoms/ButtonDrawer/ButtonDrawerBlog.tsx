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

interface ButtonDrawerBlogProps {
  ButtonColor?: ButtonProps["color"];
  ButtonLabel?: string;
  articleTitle?: string;
  articleResume?: string;
  articleDate?: string;
  articleAuthor?: string;
}

export function ButtonDrawerBlog({
  ButtonColor = "warning",
  ButtonLabel,
  articleTitle,
  articleResume,
  articleDate,
  articleAuthor,
}: ButtonDrawerBlogProps) {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="outlined" className="mt-2" color={ButtonColor}>
          {ButtonLabel}
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
          <DrawerClose asChild>
            <div className="flex justify-center items-center">
              <ButtonClose
                className="w-[40%] sm:w-[10%]"
                size="lg"
                variant="outline"
              >
                Retour
              </ButtonClose>
            </div>
          </DrawerClose>
        </DrawerHeader>
        <DrawerClose />
      </DrawerContent>
    </Drawer>
  );
}
