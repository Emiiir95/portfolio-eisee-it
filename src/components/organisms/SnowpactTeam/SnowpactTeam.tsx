import { SnowBall } from "@/components/atoms/SnowBall/SnowBall";
import avatarEmir from "@/assets/images/avatar/avatarEmir.png";
import avatarMurat from "@/assets/images/avatar/avatarMurat.png";
import avatarStephane from "@/assets/images/avatar/avatarStephane.png";
import { Typography } from "@/components/atoms/Typography/Typography";
import { Grid } from "@mui/material";

const snowpactInfo = [
  {
    avatar: avatarStephane,
    name: "Stéphane",
    job: "Co-Fondateur",
  },
  {
    avatar: avatarMurat,
    name: "Murat",
    job: "Co-Fondateur",
  },
  {
    avatar: avatarEmir,
    name: "Farid",
    job: "Dév Fullstack",
  },
  {
    avatar: avatarEmir,
    name: "Alexandre",
    job: "Dév Back",
  },
  {
    avatar: avatarEmir,
    name: "Yeliz",
    job: "Photographe / Vidéaste",
  },
  {
    avatar: avatarEmir,
    name: "Yasin",
    job: "Dév Fullstack",
  },
  {
    avatar: avatarEmir,
    name: "Sanae",
    job: "Designer UI / UX",
  },
  {
    avatar: avatarEmir,
    name: "Kabir",
    job: "Testeur QA / Dév Back",
  },
  {
    avatar: avatarEmir,
    name: "Fatih",
    job: "Apprenti Dév",
  },
  {
    avatar: avatarEmir,
    name: "Gülsüm",
    job: "Apprenti Dév",
  },
  {
    avatar: avatarEmir,
    name: "Emir",
    job: "Apprenti Dév",
  },
  {
    avatar: avatarEmir,
    name: "Fahmi",
    job: "Dév Fullstack",
  },
  {
    avatar: avatarEmir,
    name: "Semih",
    job: "Apprenti Dév",
  },
  {
    avatar: avatarEmir,
    name: "Mohamed",
    job: "Business Analyst",
  },
  {
    avatar: avatarEmir,
    name: "Anthony",
    job: "Dév Junior",
  },
  {
    avatar: avatarEmir,
    name: "Amira",
    job: "Apprentie",
  },
];

export function SnowpactTeam() {
  return (
    <div className="flex-col flex gap-12 items-center">
      <Typography variant="componentTitle" animated>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        L' <span className="text-[#F8599C]">Équipe</span>
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        xs={5}
        md={20}
      >
        {snowpactInfo.map((info, index) => (
          <Grid item spacing={3} key={index}>
            <SnowBall
              avatar={info.avatar}
              avatar2={info.avatar}
              name={info.name}
              job={info.job}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
