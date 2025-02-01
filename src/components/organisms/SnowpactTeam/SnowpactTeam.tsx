import { SnowBall } from "@/components/atoms/SnowBall/SnowBall";
import amira from "@/assets/images/avatar/amira.webp";
import yasin from "@/assets/images/avatar/yasin.webp";
import gulsum from "@/assets/images/avatar/gulsum.webp";
import anthony from "@/assets/images/avatar/anthony.webp";
import semih from "@/assets/images/avatar/semih.webp";
import fatih from "@/assets/images/avatar/fatih.webp";
import kabir from "@/assets/images/avatar/kabir.webp";
import alexandre from "@/assets/images/avatar/alexandre.webp";
import mohamed from "@/assets/images/avatar/mohamed.webp";
import sanae from "@/assets/images/avatar/sanae.webp";
import yeliz from "@/assets/images/avatar/yeliz.webp";
import fahmi from "@/assets/images/avatar/fahmi.webp";
import farid from "@/assets/images/avatar/farid.webp";
import emir from "@/assets/images/avatar/emir.webp";
import murat from "@/assets/images/avatar/murat.webp";
import stephane from "@/assets/images/avatar/stephane.webp";
import { Typography } from "@/components/atoms/Typography/Typography";
import { Grid } from "@mui/material";

const snowpactInfo = [
  {
    avatar: stephane,
    name: "Stéphane",
    job: "Co-Fondateur",
  },
  {
    avatar: murat,
    name: "Murat",
    job: "Co-Fondateur",
  },
  {
    avatar: farid,
    name: "Farid",
    job: "Dév Fullstack",
  },
  {
    avatar: alexandre,
    name: "Alexandre",
    job: "Dév Back",
  },
  {
    avatar: yeliz,
    name: "Yeliz",
    job: "Photographe / Vidéaste",
  },
  {
    avatar: yasin,
    name: "Yasin",
    job: "Dév Fullstack",
  },
  {
    avatar: sanae,
    name: "Sanae",
    job: "Designer UI / UX",
  },
  {
    avatar: kabir,
    name: "Kabir",
    job: "Testeur QA / Dév Back",
  },
  {
    avatar: fatih,
    name: "Fatih",
    job: "Apprenti Dév",
  },
  {
    avatar: gulsum,
    name: "Gülsüm",
    job: "Apprenti Dév",
  },
  {
    avatar: emir,
    name: "Emir",
    job: "Apprenti Dév",
  },
  {
    avatar: fahmi,
    name: "Fahmi",
    job: "Dév Fullstack",
  },
  {
    avatar: semih,
    name: "Semih",
    job: "Apprenti Dév",
  },
  {
    avatar: mohamed,
    name: "Mohamed",
    job: "Business Analyst",
  },
  {
    avatar: anthony,
    name: "Anthony",
    job: "Dév Junior",
  },
  {
    avatar: amira,
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
