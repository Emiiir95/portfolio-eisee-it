import { Typography } from "@/components/atoms/Typography/Typography";
import {
  BookOpenCheckIcon,
  Code2Icon,
  DraftingCompassIcon,
  RocketIcon,
} from "lucide-react";

import Adn from "@/assets/images/rea_snow/adn.png";
import Mrh from "@/assets/images/rea_snow/mrh.png";
import Signaleo from "@/assets/images/rea_snow/signaleo.png";
import douanes from "@/assets/images/rea_snow/douanes.png";
import header from "@/assets/images/headerSnowpact.png";

export function HeaderSnowpact() {
  const cards = [
    {
      name: "Livraison",
      description:
        "Nous testons et validons ensemble pour mettre de nouvelles versions en production de manière continue.",
      icon: RocketIcon,
    },
    {
      name: "Conception",
      description:
        "Nous concevons ensemble le MVP (le produit minimum viable) qui répondra à vos plus grandes attentes.",
      icon: DraftingCompassIcon,
    },
    {
      name: "Étude du besoin",
      description:
        "Nous discutons ensemble de votre projet de vos objectifs, puis nous vous proposons un plan de route pour livrer votre application.",
      icon: BookOpenCheckIcon,
    },
    {
      name: "Développement",
      description:
        "Nous développerons les fonctionnalités les plus importantes à chaque sprint pour atteindre efficacement votre objectif.",
      icon: Code2Icon,
    },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt="l'équipe snowpact"
        src={header}
        className="absolute inset-0 -z-10 size-full object-cover object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <Typography
            animated
            customClassName="text-5xl font-semibold tracking-tight sm:text-7xl"
          >
            Snowpact
          </Typography>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            Leur mission est de vous accompagner dans la conception, le
            développement et le déploiement de vos applications web et mobile,
            en utilisant la méthode agile pour garantir la qualité, la
            flexibilité et la satisfaction de vos besoins.
          </p>
        </div>
        <div className="mx-auto mt-16 mb-32 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                aria-hidden="true"
                className="h-7 w-5 flex-none text-indigo-400"
              />
              <div className="text-base/7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center w-full md:h-auto h-[500px] md:gap-20 gap-5 md:flex-row flex-col border-t-[1px] border-b-[1px] md:py-12 md:px-52 border-[#232323] backdrop-blur-sm bg-opacity-30 bg-[#000000]">
        <Typography variant="h1" animated>
          Quelques <span className="text-[#E12CF7]">réalisations</span>
        </Typography>
        <div className="md:flex-row flex-col flex md:gap-12 md:h-12 md:w-auto w-52 gap-6 sm:mt-0">
          <img src={Adn} />
          <img src={douanes} />
          <img src={Signaleo} />
          <img src={Mrh} />
        </div>
      </div>
    </div>
  );
}
