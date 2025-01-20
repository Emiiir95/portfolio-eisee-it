import { Typography } from "@/components/atoms/Typography/Typography";
import fondApple from "@/assets/images/fondApple.jpg";

export function MissionSnowpact() {
  return (
    <div className="relative py-20 h-auto px-10">
      <img
        src={fondApple}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex-col gap-12 items-center justify-center flex">
        <Typography align="center" variant="componentTitle" animated>
          <span className="text-black">Mes missions</span>
        </Typography>

        <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p className="text-sm">bash</p>
          </div>
          <div className="mt-4">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-green-400">$ Que fais-je dans l'entreprise ?</p>
            <p className="text-white">- Développement Front</p>
            <p className="text-white">- Développement Back</p>
            <p className="text-white">- Développement Mobile</p>
            <p className="text-white">- Développement WordPress</p>
            <p className="text-green-400">
              ${" "}
              <span className="animate-pulse animate-infinite animate-duration-1000 text-white">
                |
              </span>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
