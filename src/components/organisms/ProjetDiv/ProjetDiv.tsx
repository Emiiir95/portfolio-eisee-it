import { Typography } from "@/components/atoms/Typography/Typography";
import { Link } from "react-router-dom";

interface ProjetDiv{
    iconProjet: string
    boutonLink: string
    title: string
}

export function ProjetDiv({iconProjet, boutonLink, title}: ProjetDiv) {
    return (
        <div className="bg-[#7B3460] w-full h-52 items-center flex justify-center">
            <div className="w-36 h-36 border-2 bg-white rounded-2xl flex justify-center items-center mr-16">
                <Link target='_blank' to={boutonLink}>
                    <img src={iconProjet} className="w-32 h-32 rounded-2xl" />
                </Link>
             </div>
            <Typography color='white' align='center' variant='bigTitle'>{title}</Typography>
        </div>
    );
  };
  