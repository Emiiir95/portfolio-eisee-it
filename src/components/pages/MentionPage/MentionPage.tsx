import { Typography } from "@/components/atoms/Typography/Typography";
import { PublicLayout } from "@/components/templates/PublicLayout";

export const MentionPage = () => {
  return (
    <PublicLayout>
      <Typography
        animated
        align="center"
        variant="heroTitle"
        color="white"
        marginClassName="my-32"
      >
        Mentions Légales
      </Typography>

      <div className="flex flex-col max-w-4xl mx-auto px-4 mb-32">
        <Typography animated variant="h2" color="white">
          Informations Générales
        </Typography>
        <div className="border-t-2 w-[30%] mb-8" />
        <Typography variant="paragraph" color="white" marginClassName="mb-8">
          Ce site est édité par : Sen Emir <br />
          Email : emir.metis.sen@gmail.com
        </Typography>

        <Typography animated variant="h2" color="white" marginClassName="mt-12">
          Hébergement
        </Typography>
        <div className="border-t-2 w-[30%] mb-8" />
        <Typography variant="paragraph" color="white" marginClassName="mb-4">
          <strong>Le site est hébergé par :</strong> Github <br />
          Adresse : 88 Colin P Kelly Jr St San Francisco, CA 94107 <br />
          Numéro : (877) 448-4820
        </Typography>

        <Typography variant="paragraph" color="white" marginClassName="mb-4">
          <strong>Déployé via :</strong> Vercel <br />
          340 S Lemon Ave #4133 Walnut, CA 91789 United States
        </Typography>

        <Typography variant="paragraph" color="white" marginClassName="mb-8">
          <strong>Nom de domaine :</strong> Vercel <br />
          340 S Lemon Ave #4133 Walnut, CA 91789 United States
        </Typography>

        <Typography animated variant="h2" color="white" marginClassName="mt-12">
          Propriété Intellectuelle
        </Typography>
        <div className="border-t-2 w-[30%] mb-8" />

        <Typography variant="paragraph" color="white" marginClassName="mb-8">
          Tous les contenus présents sur ce site (textes, images, graphismes,
          logos, vidéos, etc.) sont la propriété exclusive de Sen Emir, sauf
          mention contraire. Certains contenus (images, vidéos, ou autres
          médias) proviennent de sources libres d&apos;accès sur Google ou
          d&apos;autres plateformes, et sont utilisés conformément aux droits
          d&apos;usage autorisés.
        </Typography>

        <Typography animated variant="h2" color="white" marginClassName="mt-12">
          Cookies
        </Typography>
        <div className="border-t-2 w-[30%] mb-8" />

        <Typography variant="paragraph" color="white" marginClassName="mb-8">
          Ce site n&apos;utilise aucun cookie. Aucune donnée de navigation
          n&apos;est collectée ou stockée par le biais de cookies ou
          d&apos;autres technologies similaires. Vous pouvez naviguer en toute
          tranquillité sans suivi ni collecte d&apos;informations.
        </Typography>

        <Typography
          animated
          variant="h2"
          color="white"
          marginClassName="mt-12"
          customClassName="underline"
        >
          Données Personnelles
        </Typography>
        <div className="border-t-2 w-[30%] mb-8" />

        <Typography variant="paragraph" color="white" marginClassName="mb-8">
          Aucune donnée personnelle n&apos;est collectée via ce site web, à
          moins que cela ne soit spécifiquement indiqué dans un formulaire de
          contact ou dans un but précis.
        </Typography>
      </div>
    </PublicLayout>
  );
};
