import { SnowBall } from "@/components/atoms/SnowBall/SnowBall";
import avatarEmir from "@/assets/images/avatar/avatarEmir.png";
// import avatarEmir2 from '@/assets/images/avatar/avatarEmir2.png';
import avatarMurat from "@/assets/images/avatar/avatarMurat.png";
import avatarMurat2 from "@/assets/images/avatar/avatarMurat2.png";
import avatarStephane from "@/assets/images/avatar/avatarStephane.png";
import avatarStephane2 from "@/assets/images/avatar/avatarStephane2.png";
import { Typography } from "@/components/atoms/Typography/Typography";
import { Grid } from "@mui/material";

const snowpactInfo = [
  {
    avatar: avatarStephane,
    avatar2: avatarStephane2,
    name: "Stéphane",
    job: "Co-Fondateur",
  },
  {
    avatar: avatarMurat,
    avatar2: avatarMurat2,
    name: "Murat",
    job: "Co-Fondateur",
  },
  {
    avatar: avatarEmir,
    // // avatar2: avatarEmir2,
    name: "Farid",
    job: "Dév Fullstack",
  },
  {
    avatar: avatarEmir,
    // // avatar2: avatarEmir2,
    name: "Alexandre",
    job: "Dév Back",
  },
  {
    avatar: avatarEmir,
    // // avatar2: avatarEmir2,
    name: "Yeliz",
    job: "Photographe / Vidéaste",
  },
  {
    avatar: avatarEmir,
    // // avatar2: avatarEmir2,
    name: "Yasin",
    job: "Dév Fullstack",
  },
  {
    avatar: avatarEmir,
    // // avatar2: avatarEmir2,
    name: "Sanae",
    job: "Designer UI / UX",
  },
  {
    avatar: avatarEmir,
    // // avatar2: avatarEmir2,
    name: "Kabir",
    job: "Testeur QA / Dév Back",
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: "Fatih",
    job: "Apprenti Dév",
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: "Gülsüm",
    job: "Apprenti Dév",
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: "Emir",
    job: "Apprenti Dév",
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: "Fahmi",
    job: "Dév Fullstack",
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: "Semih",
    job: "Apprenti Dév",
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: "Mohamed",
    job: "Business Analyst",
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
    name: "Anthony",
    job: "Dév Junior",
  },
  {
    avatar: avatarEmir,
    // avatar2: avatarEmir2,
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
