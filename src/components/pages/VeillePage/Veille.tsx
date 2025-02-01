import { PublicLayout } from "@/components/templates/PublicLayout";
import { Alert } from "flowbite-react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Blog } from "@/components/organisms/Blog";
import { posts } from "./veilleData";
import { NeonBlur } from "@/components/atoms/NeonBlur";

export const Veille = () => {
  return (
    <PublicLayout>
      <div className="relative">
        {/* Neon Blurs en arrière-plan */}
        <div className="fixed inset-0 pointer-events-none">
          <NeonBlur customPosition="absolute bg-[#F8599C] left-[10em] top-[30em]" />
          <NeonBlur customPosition="absolute bg-blue-800 right-[10em] top-0" />
        </div>
        <div className="md:absolute md:right-20 animate-fade-left animate-once animate-duration-[4000ms] flex justify-center mt-24 z-10">
          <Alert className="w-72" color="info">
            <NotificationsActiveIcon />
            <span className="font-medium ml-6">
              Vous avez une notification !
            </span>
          </Alert>
        </div>
        <Blog posts={posts} />
      </div>
    </PublicLayout>
  );
};
