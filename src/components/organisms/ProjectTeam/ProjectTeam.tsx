import { Typography } from "@/components/atoms/Typography/Typography";
import { SnowBall } from "@/components/atoms/SnowBall";

interface SnowBallProps {
  avatar: string;
  name: string;
  job: string;
}

interface ProjectTeamProps {
  teams: SnowBallProps[];
}

export function ProjectTeam({ teams }: ProjectTeamProps) {
  return (
    <section className="mb-36 flex flex-col items-center justify-center">
      <Typography
        variant="h1"
        align="center"
        weight="bold"
        marginClassName="mb-5"
        customClassName="text-[#5813C5]"
      >
        Notre équipe sur ce projet !
      </Typography>
      <div className="flex sm:flex-row flex-col justify-center gap-3 items-center">
        {teams.map((items, index) => (
          <SnowBall
            key={index}
            avatar={items.avatar}
            name={items.name}
            job={items.job}
          />
        ))}
      </div>
    </section>
  );
}
