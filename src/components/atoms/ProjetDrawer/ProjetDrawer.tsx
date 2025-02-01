import { Typography } from "../Typography/Typography";
import { Link } from "react-router-dom";

interface ProjetDrawerProps {
  url: string;
  title: string;
  year: string;
  image?: string;
  // description: string;
  // publicLabel?: string;
  // missionLabel?: string;
  // technoLabel?: string;
  // tools?: string;
  // link?: string;
}

export const ProjetDrawer = ({
  url,
  title,
  year,
  image,
  // link,
  // description,
  // publicLabel,
  // missionLabel,
  // technoLabel,
  // tools,
}: ProjetDrawerProps) => {
  return (
    <Link
      to={`/Realisation/${url}`}
      style={{ textDecoration: "none", color: "inherit" }}
      className="w-52 h-30 bg-gradient-to-br from-[#F27121] via-[#E94057] to-[#8A2487] p-4 rounded-3xl flex flex-col items-center gap-2"
    >
      <div className="w-24 h-24 border-2 border-[#864499] bg-white rounded-2xl flex justify-center items-center">
        <img src={image} className="w-20 h-20 rounded-2xl" alt={title} />
      </div>
      <div>
        <Typography
          variant="h3"
          customColorClass="text-lg font-semibold"
          align="center"
          color="white"
        >
          {title}
        </Typography>
        <Typography align="center" color="gray">
          {year}
        </Typography>
      </div>
    </Link>
  );
};
