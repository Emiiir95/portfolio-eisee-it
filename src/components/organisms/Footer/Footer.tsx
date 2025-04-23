import { Typography } from "@/components/atoms/Typography/Typography";
import { SocialHorizontal } from "../SocialHorizontal";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="p-10 flex bg-black justify-between items-center sm:flex-row flex-col-reverse pb-28">
      <div className="flex flex-col gap-2">
        <Typography
          customColorClass="text-[#71717A]"
          variant="paragraph"
          align="center"
          marginClassName="mb-0"
        >
          © 2024 | Emir Sen
        </Typography>
        <Link className="text-[#71717A] no-underline text-sm" to="/Mentions">
          <Typography
            customColorClass="text-[#71717A]"
            variant="extraSmall"
            align="center"
            marginClassName="mb-0"
          >
            Mentions légales
          </Typography>
        </Link>
      </div>
      <SocialHorizontal />
    </footer>
  );
}
