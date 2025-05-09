import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@/components/atoms/Typography/Typography";
import Grid from "@mui/material/Grid";

const parcours = [
  { title: "Pizzeria", lieu: "Mn Pizza", ville: "Andrésy", date: "2024" },
  {
    title: "Livreur Pressing",
    lieu: "LaundryHeap",
    ville: "Paris",
    date: "2023-2024",
  },
  {
    title: "Alternance BTS",
    lieu: "Esiee It / Snowpact",
    ville: "Osny",
    date: "2023-2025",
  },
  {
    title: "Intérim",
    lieu: "Adéquat",
    ville: "Saint-Ouen-l’Aumône",
    date: "2023",
  },
  {
    title: "Bac spécialité Mathématiques et SVT",
    lieu: "Lycée Edmond Rostand",
    ville: "Saint-Ouen-l’Aumône",
    date: "2023",
  },
  { title: "Chantier", lieu: "DEHETP", ville: "Saint-Gratien", date: "2022" },
  {
    title: "Stage en développement web",
    lieu: "Snowpact",
    ville: "Osny",
    date: "2022",
  },
  {
    title: "Brevet mention bien",
    lieu: "Collège Marcel Pagnol",
    ville: "Saint-Ouen-l’Aumône",
    date: "2020",
  },
  {
    title: "Stage en menuiserie",
    lieu: "DSE Menuiserie",
    ville: "Osny",
    date: "2019",
  },
];

export function ParcoursComponent() {
  return (
    <div>
      <Typography
        align="center"
        variant="componentTitle"
        color="white"
        customClassName="md:mb-20 mb-10"
        animated
      >
        Mon <span className="text-[#D932F7]">parcours</span>
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {parcours.map((info, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              style={{ backgroundColor: "#242F42", height: 180 }}
              className="md:p-4 md:py-4 py-2 md:px-2 px-2 hover:ease-in hover:saturate-150 hover:scale-[101%]"
            >
              <CardContent>
                <Typography color="white" variant="componentSmallTitle">
                  {info.title}
                </Typography>
                <Typography
                  customClassName="text-[#BABEC4]"
                  variant="h5"
                  marginClassName="mt-2"
                >
                  {info.lieu}
                </Typography>
                <Typography customClassName="text-[#BABEC4]" variant="h5">
                  {info.ville}, {info.date}
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
