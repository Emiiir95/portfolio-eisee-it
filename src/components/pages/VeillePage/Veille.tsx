import { PublicLayout } from '@/components/templates/PublicLayout';
import { Alert } from "flowbite-react";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Blog } from '@/components/organisms/Blog';

export const Veille = () => {
  const posts = [
    {
      id: 1,
      title: 'Le No-Code, une nouvelle voie pour devenir développeur web',
      date: '12/09/2024',
      author: "Non précisé (contenu sponsorisé par l'École Cube)",
      href: 'https://www.cnews.fr/le-corner-partenaires/2024-09-04/le-no-code-une-nouvelle-voie-pour-devenir-developpeur-web-1551048',
      description:
        "Le No-Code transforme le monde de la tech en rendant la création d'applications web et mobiles accessible à tous, sans nécessiter de compétences en programmation. Grâce à des outils visuels comme Webflow, Bubble, ou Airtable, les entrepreneurs et entreprises peuvent développer des solutions digitales rapidement et à moindre coût. D'après Gartner, 70 % des applications créées d'ici 2025 utiliseront des technologies No-Code ou Low-Code.",
      imageUrl:
        'https://static.cnews.fr/sites/default/files/styles/image_750_422/public/image1_66d82dc9abfad.jpg?itok=JBJrw6yh',
      rating: 5, 
    },
    {
      id: 2,
      title: 'Le « no code » bouscule les métiers et les compétences',
      date: '18/07/2024',
      author: "Estelle Durand",
      href: 'https://www.cnews.fr/le-corner-partenaires/2024-09-04/le-no-code-une-nouvelle-voie-pour-devenir-developpeur-web-1551048',
      description:
        "Le no-code révolutionne les métiers en rendant possible la création d'applications sans compétences en programmation. Ce mouvement démocratise la digitalisation, fait émerger de nouveaux métiers comme celui de product builder no-code et offre des opportunités de reconversion ou d'évolution professionnelle. La certification RNCP associée, portée par l'École Cube, répond à ces nouveaux besoins en compétences. Le no-code attire des profils variés, du marketing aux RH, en facilitant leur participation à des projets digitaux. Des organismes comme Contournement utilisent aussi le no-code pour initier les non-spécialistes au développement et susciter des vocations.",
      imageUrl:
        'https://static.cnews.fr/sites/default/files/styles/image_750_422/public/image1_66d82dc9abfad.jpg?itok=JBJrw6yh',
      rating: 5, 
    },
    {
      id: 3,
      title: 'No-code oui, mais No norme',
      date: '12/09/2024',
      author: "Thomas Pagbe",
      href: 'https://www.cnews.fr/le-corner-partenaires/2024-09-04/le-no-code-une-nouvelle-voie-pour-devenir-developpeur-web-1551048',
      description:
        "Le no-code révolutionne les métiers en rendant possible la création d'applications sans compétences en programmation. Ce mouvement démocratise la digitalisation, fait émerger de nouveaux métiers comme celui de product builder no-code et offre des opportunités de reconversion ou d'évolution professionnelle. La certification RNCP associée, portée par l'École Cube, répond à ces nouveaux besoins en compétences. Le no-code attire des profils variés, du marketing aux RH, en facilitant leur participation à des projets digitaux. Des organismes comme Contournement utilisent aussi le no-code pour initier les non-spécialistes au développement et susciter des vocations.",
      imageUrl:
        'https://www.itforbusiness.fr/wp-content/uploads/2024/09/AFNOR-Low-Code-No-Code-shutterstock_2230902901.jpg',
      rating: 5, 
    },
    {
      id: 4,
      title: "Paradoxe du low code et du no code : libérer le temps des pros de l'IT, mais créer de nouveaux problèmes",
      date: '04/04/2023 (mis à jour le 04/06/2024)',
      author: "Joe McKendrick",
      href: 'https://www.cnews.fr/le-corner-partenaires/2024-09-04/le-no-code-une-nouvelle-voie-pour-devenir-developpeur-web-1551048',
      description:
        "Le low code et le no code simplifient la création d'applications et allègent la charge des équipes IT, mais engendrent des défis comme la prolifération d'applications non standardisées et la gestion de la complexité accrue. Bien qu'efficaces pour automatiser et moderniser les processus, ces outils nécessitent une supervision IT pour garantir sécurité, conformité et cohérence. Les professionnels doivent encadrer les utilisateurs métiers en définissant des normes et processus, et éviter des chevauchements inutiles d'applications. Les gains de temps réalisés sont souvent redirigés vers la gestion et l'intégration de ces nouveaux écosystèmes d'applications.",
      imageUrl:
        'https://www.zdnet.fr/wp-content/uploads/zdnet/2024/02/WorkerKeyboard-750x410.jpg',
      rating: 5, 
    },
  ];

  return (
    <PublicLayout>
      <div className="bg-black relative">

        <div className='md:absolute md:right-20 animate-fade-left animate-once animate-duration-[4000ms] flex justify-center mt-24'>
          <Alert className='w-72' color="info">
            <NotificationsActiveIcon/>
            <span className="font-medium ml-6">Vous avez une notification !</span>
          </Alert>
        </div>
        <Blog posts={posts} />
    </div>
    </PublicLayout>
  );
};

