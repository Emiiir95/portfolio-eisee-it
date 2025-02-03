import { Typography } from "@/components/atoms/Typography/Typography";

interface IconAndText {
  icon: React.ElementType;
  alt: string;
  label: string;
}

interface TextWithIconProps {
  tab: IconAndText[];
}

export const TextWithIcon = ({ tab }: TextWithIconProps) => {
  return (
    <div className="mx-auto w-[80%] mb-36">
      <Typography variant="h1" color="white" align="center" weight="bold">
        Mon rôle / Mes missions
      </Typography>
      <div className="space-y-3 flex justify-center items-center flex-col sm:flex-row sm:gap-3 sm:space-y-0 md:mb-8 md:mt-12 xl:gap-8">
        {tab.map((item, index) => (
          <div
            key={index}
            className="bg-white px-8 md:w-[400px] w-full py-5 shadow flex rounded-xl gap-4"
          >
            <item.icon
              size={30}
              className="text-ditibBlack bg-gray-200 rounded-full p-1 h-8 w-8 min-w-8 min-h-8"
            />
            <div className="space-y-2">
              <Typography variant="h3" weight="semibold">
                {item.label}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
