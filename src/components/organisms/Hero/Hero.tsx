
"use client";

import { Typography } from "@/components/atoms/Typography/Typography";
import hero from '@/assets/images/hero.gif';

export function Hero() {
    return (
        <>
        <img src={hero} className="relative" height={7900} width={3900} />
        <div className="absolute bottom-[50%] right-[44%]">
          <div className="justify-center flex flex-col">
             <Typography variant="componentTitle" customColor="white" align="center">Emir Sen</Typography>
             <Typography variant="h2" customColor="white">BTS SIO option SLAM</Typography>
           </div>
           <div className='bg-white w-60 h-14'></div>
          </div>
        </>
  );
}
