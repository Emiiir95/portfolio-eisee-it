import { Hero } from '@/components/organisms/Hero';
import { PublicLayout } from '@/components/templates/PublicLayout';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"




export const HomePage = () => {
  return (
    <PublicLayout>    
      <Hero /> 
      <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <button>Submit</button>
      <DrawerClose>
        <button>Cancel</button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
    </PublicLayout>
  );
};

