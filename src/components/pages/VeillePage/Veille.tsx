import { PublicLayout } from "@/components/templates/PublicLayout";
import { Alert } from "flowbite-react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Blog } from "@/components/organisms/Blog";

export const Veille = () => {
  const posts = [
    {
      id: 1,
      title: "Le No-Code, une nouvelle voie pour devenir développeur web",
      date: "12/09/2024",
      author: "Non précisé (contenu sponsorisé par l'École Cube)",
      href: "https://www.cnews.fr/le-corner-partenaires/2024-09-04/le-no-code-une-nouvelle-voie-pour-devenir-developpeur-web-1551048",
      description:
        "Le No-Code transforme le monde de la tech en rendant la création d'applications web accessible à tous, sans nécessiter de compétences en programmation. Grâce au No-code, les entreprises peuvent développer des solutions digitales rapidement et pas cher. D'après l'article, 70 % des applications créées d'ici 2025 utiliseront des technologies No-Code ou Low-Code.",
      imageUrl:
        "https://static.cnews.fr/sites/default/files/styles/image_750_422/public/image1_66d82dc9abfad.jpg?itok=JBJrw6yh",
      rating: 5,
    },
    {
      id: 2,
      title:
        "IA : comment créer une application à partir d'une image et sans savoir coder ?",
      date: "",
      author: "",
      href: "https://www.futura-sciences.com/tech/questions-reponses/intelligence-artificielle-ia-creer-application-partir-image-savoir-coder-21581/",
      description: "",
      imageUrl:
        "https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=60,format=auto/sources/images/Cr%C3%A9er%20application.jpg",
      rating: 5,
    },
    {
      id: 3,
      title: "",
      date: "",
      author: "",
      href: "https://www.tremplin-numerique.org/wordpress-automatic",
      description: "",
      imageUrl:
        "https://www.tremplin-numerique.org/wp-content/uploads/2024/11/L.png",
      rating: 5,
    },
    {
      id: 4,
      title: "",
      date: "",
      author: "",
      href: "https://www.objetconnecte.com/le-developpement-web-est-il-sur-le-point-datteindre-son-apogee-a-laube-de-2025/",
      description: "",
      imageUrl:
        "https://www.objetconnecte.com/wp-content/uploads/2024/11/Le-developpement-web-est-il-sur-le-point-datteindre-son-apogee-a-laube-de-2025-.png",
      rating: 5,
    },
    {
      id: 4,
      title: "",
      date: "",
      author: "",
      href: "https://www.clubic.com/actualite-545339-deux-failles-de-securite-majeures-dans-un-plugin-wordpress-menacent-encore-des-centaines-de-milliers-de-sites.html",
      description: "",
      imageUrl:
        "https://pic.clubic.com/c08f8bb52256776/1600x828/smart/hacking.webp",
      rating: 5,
    },
  ];

  return (
    <PublicLayout>
      <div className="bg-black relative">
        <div className="md:absolute md:right-20 animate-fade-left animate-once animate-duration-[4000ms] flex justify-center mt-24">
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
