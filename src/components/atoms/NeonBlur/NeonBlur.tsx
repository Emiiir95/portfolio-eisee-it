import clsx from "clsx";

interface NeonBlurProps {
  customPosition?: string;
  customColor?: string;
}

export const NeonBlur = ({
  customPosition,
  customColor = "bg-[#D932F7]",
}: NeonBlurProps) => {
  return (
    <div
      className={clsx(
        "rounded-full blur-[100px] opacity-60",
        "w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]",
        customPosition,
        customColor,
      )}
    />
  );
};
