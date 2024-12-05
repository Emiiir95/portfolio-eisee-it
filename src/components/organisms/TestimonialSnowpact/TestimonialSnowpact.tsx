import React from "react";
import { Typography } from "@/components/atoms/Typography/Typography";

export const TestimonialSnowpact = () => {
  const testimonials = [
    {
      body: "C'est une équipe très dynamique qui sait s'adapter très rapidement et comprend les enjeux de l'entreprise. Ce sont des développeurs fullstack donc ils ont beaucoup d'expérience sur toutes sortes de technologies.",
      author: "Bertrand - Anime Digital Network",
    },
    {
      body: "L'équipe SnowPact est composée de développeurs talentueux et surtout à l'écoute des besoins fonctionnels.",
      author: "Ulrich - Humanéo",
    },
    {
      body: "Au début j'avais peur de me lancer, mais SnowPact m'a beaucoup accompagné et soutenu lors de la création de mon projet. Maintenant, que j'ai une présence sur internet c'est beaucoup plus facile pour moi de vendre.",
      author: "Sarah - Douceurs Sucrées",
    },
    {
      body: "Snowpact m'a permis d'augmenter ma visibilité sur le net et depuis j'ai beaucoup plus de patients",
      author: "Thomas - Pédicure Podologue Cergy",
    },
    {
      body: "Snowpact nous a donné une méthodologie de travail, qui nous a permis de rapidement avoir des",
      author: "Cheick - ReflexOccaz",
    },
  ];

  return (
    <div className="w-full">
      <Typography variant="componentTitle" animated align="center">
        <span className="text-[#40DB78]">Témoignage </span>de leurs clients
      </Typography>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
