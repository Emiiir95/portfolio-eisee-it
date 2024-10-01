import { Typography } from "@/components/atoms/Typography/Typography";

interface FooterProps {
  color?: string;
  textColor?: string;
}

export function Footer({ }: FooterProps) {
  return (
    <footer className="p-4 flex justify-start bg-[#FFEEF4]">
      <div className={"container mx-auto text-start"}>
        <Typography customColorClass="text-[#BA5E98]" align="center">© 2024 | Emir Sen</Typography>
      </div>
    </footer>
  );
};
