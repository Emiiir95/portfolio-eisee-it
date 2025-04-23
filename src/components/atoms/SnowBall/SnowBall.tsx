import { Snowfall } from "react-snowfall";
import { Typography } from "../Typography/Typography";
import { useState } from "react";

interface SnowBallPorps {
  avatar: string;
  name: string;
  job: string;
}

export function SnowBall({ avatar, name, job }: SnowBallPorps) {
  const [isSnowing, setIsSnowing] = useState(false);

  const handleMouseEnter = () => {
    setIsSnowing(true);
  };

  const handleMouseLeave = () => {
    setIsSnowing(false);
  };

  return (
    <div
      className="w-44 h-64 flex flex-col items-center relative overflow-hidden border-[2px] border-[#815CFC] rounded-2xl shadow-inner shadow-white p-4 gap-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center items-center">
        <img src={avatar} alt="avatar" className="w-28 h-28 object-cover" />
        {isSnowing && <Snowfall />}
        {name === "Emir" && <Snowfall />}
      </div>
      <div>
        <Typography
          align="center"
          variant="componentSmallTitle"
          customColorClass="text-[#815CFC]"
        >
          {name}
        </Typography>
        <Typography
          align="center"
          customColorClass="text-gray-600"
          variant="cardTitle"
        >
          {job}
        </Typography>
      </div>
    </div>
  );
}
