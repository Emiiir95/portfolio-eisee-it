import { Typography } from "@/components/atoms/Typography/Typography";
import stackDocker from "@/assets/images/tech_snow/stack-docker.png";
import stackExpress from "@/assets/images/tech_snow/stack-express.png";
import stackFigma from "@/assets/images/tech_snow/stack-figma.png";
import stackFirebase from "@/assets/images/tech_snow/stack-firebase.png";
import stackGoogleAnalytics from "@/assets/images/tech_snow/stack-google-analytics.png";
import stackGoogleCloud from "@/assets/images/tech_snow/stack-google-cloud.png";
import stackJs from "@/assets/images/tech_snow/stack-javascript.png";
import stackNextjs from "@/assets/images/tech_snow/stack-nextjs.png";
import stackNode from "@/assets/images/tech_snow/stack-nodejs.png";
import stackReact from "@/assets/images/tech_snow/stack-react.png";
import stackStripe from "@/assets/images/tech_snow/stack-stripe.png";
import stackTs from "@/assets/images/tech_snow/stack-typescript.png";
import stackAWS from "@/assets/images/tech_snow/stack-aws.png";
import { TechBlocks } from "@/components/atoms/TechBlock/TechBlocks";

export const TechSnowpact = () => {
  const TECHNO_ITEMS = [
    {
      title: "Stack Front",
      items: [
        {
          titleLogo: "React",
          pathLogo: stackReact,
          colorBg: "bg-[#124E59]/80",
        },
        {
          titleLogo: "Next.JS",
          pathLogo: stackNextjs,
          colorBg: "bg-black/80",
        },
        {
          titleLogo: "Javascript",
          pathLogo: stackJs,
          colorBg: "bg-[#C5B200]/80",
        },
        {
          titleLogo: "Typescript",
          pathLogo: stackTs,
          colorBg: "bg-[#3790CC]/80",
        },
      ],
    },
    {
      title: "Stack Back",
      items: [
        {
          titleLogo: "Node.JS",
          pathLogo: stackNode,
          colorBg: "bg-[#82B40A]/80",
        },
        {
          titleLogo: "Express.JS",
          pathLogo: stackExpress,
          colorBg: "bg-[#B86942]/80",
        },
      ],
    },
    {
      title: "Stack Infra",
      items: [
        {
          titleLogo: "Docker",
          pathLogo: stackDocker,
          colorBg: "bg-[#124E59]/30",
        },
        {
          titleLogo: "Google Cloud",
          pathLogo: stackGoogleCloud,
          colorBg: "bg-gray-300/80",
        },
        {
          titleLogo: "AWS",
          pathLogo: stackAWS,
          colorBg: "bg-[#9B5F57]/60",
        },
      ],
    },
    {
      title: "Autre techno",
      items: [
        {
          titleLogo: "Google Analytics",
          pathLogo: stackGoogleAnalytics,
          colorBg: "bg-gray-300/80",
        },
        {
          titleLogo: "Stripe",
          pathLogo: stackStripe,
          colorBg: "bg-[#3790CC]/80",
        },
        {
          titleLogo: "Firebase",
          pathLogo: stackFirebase,
          colorBg: "bg-gray-300/80",
        },
        {
          titleLogo: "Figma",
          pathLogo: stackFigma,
          colorBg: "bg-purple-400/80",
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      <Typography animated variant="componentTitle">
        Leurs <span className="text-[#FF9759]">technologies</span>
      </Typography>
      <div className="border-t-4 border-[#2A88F1] w-[20%] mb-12 animate-shake animate-infinite animate-duration-[4000ms]" />
      <TechBlocks size="lg" items={TECHNO_ITEMS} />
    </div>
  );
};
