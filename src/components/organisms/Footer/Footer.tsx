import { Typography } from "@/components/atoms/Typography/Typography";

interface FooterProps {
  color?: string;
  textColor?: string;
}

export function Footer({ }: FooterProps) {
  return (
    <footer className="p-14 flex justify-start bg-black mt-10">
      <div className={"container mx-auto text-start"}>
        <Typography customColorClass="text-[#71717A]" align="center">© 2024 | Emir Sen</Typography>
      </div>
    </footer>
  );
};