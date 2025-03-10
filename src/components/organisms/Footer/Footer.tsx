import { Typography } from "@/components/atoms/Typography/Typography";
import { SocialHorizontal } from "../SocialHorizontal";

export function Footer() {
  return (
    <footer className="p-10 flex bg-black justify-between items-center sm:flex-row flex-col pb-28">
      <Typography customColorClass="text-[#71717A]" align="center">
        © 2024 | Emir Sen
      </Typography>
      <SocialHorizontal />
    </footer>
  );
}
