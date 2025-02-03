// import { Typography } from "@/components/atoms/Typography/Typography";

// interface ProjectProuveProps {
//   title: string;
//   image: string;
//   platform: string;
// }

// export const ProjectProuve = ({
//   title,
//   image,
//   platform,
// }: ProjectProuveProps) => {
//   return (
//     <div className="w-[80%]  mx-auto bg-black p-8 rounded-2xl shadow-[0_0_100px_rgba(0,255,255,0.1)]">
//       {/* En-tête */}
//       <div className="mb-8 text-center">
//         <Typography
//           weight="bold"
//           marginClassName="mb-2"
//           variant="h1"
//           customClassName="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
//         >
//           {title}
//         </Typography>
//         <div className="flex items-center justify-center gap-3">
//           {platform && (
//             <span className="px-4 py-1 bg-gray-900 rounded-full text-sm text-gray-300 flex items-center gap-2">
//               {platform === "figma" && (
//                 <svg
//                   className="w-4 h-4"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M12 12a3 3 0 1 0 3 3v-3h-3Z" />
//                   <path d="M12 6a3 3 0 1 0 3 3V6h-3Z" />
//                   <path d="M12 0a3 3 0 1 0 3 3V0h-3Z" />
//                   <path d="M6 6a3 3 0 1 0 3 3V6H6Z" />
//                   <path d="M6 12a3 3 0 1 0 3 3v-3H6Z" />
//                 </svg>
//               )}
//               {platform === "slack" && (
//                 <svg
//                   className="w-4 h-4"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
//                 </svg>
//               )}
//               {platform === "linear" && (
//                 <svg
//                   className="w-4 h-4"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M17.28 7.78a6.76 6.76 0 0 0-5.64-3.05 6.86 6.86 0 0 0-6.85 6.85c0 3.78 3.07 6.85 6.85 6.85.66 0 1.3-.09 1.9-.27m3.74-3.53a6.85 6.85 0 0 0-3.74-9.38" />
//                 </svg>
//               )}
//               {platform}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* Zone de preuve */}
//       <div className="relative group">
//         {/* Bordure animée */}
//         <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-xl blur opacity-80" />

//         {/* Contenu */}
//         <div className="relative bg-black rounded-lg overflow-hidden">
//           <div className="aspect-video w-full">
//             {image ? (
//               <img
//                 src={image}
//                 alt="Preuve de réalisation"
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center text-gray-500">
//                 <span>Aucune image fournie</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { Typography } from "@/components/atoms/Typography/Typography";
import { useState } from "react";

interface Platform {
  name: string;
  image: string;
}

interface ProjectProuveProps {
  title: string;
  platforms: Platform[];
}

export const ProjectProuve = ({ title, platforms }: ProjectProuveProps) => {
  const [activePlatform, setActivePlatform] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null,
  );

  const handlePlatformChange = (index: number) => {
    if (index > activePlatform) {
      setSlideDirection("right");
    } else {
      setSlideDirection("left");
    }
    setActivePlatform(index);
  };

  return (
    <div className="w-[80%] mx-auto bg-black p-8 rounded-2xl shadow-[0_0_100px_rgba(0,255,255,0.1)]">
      {/* En-tête */}
      <div className="mb-8 text-center">
        <Typography
          weight="bold"
          marginClassName="mb-2"
          variant="h1"
          customClassName="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
        >
          {title}
        </Typography>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {platforms.map((platform, index) => (
            <button
              key={index}
              onClick={() => handlePlatformChange(index)}
              className={`px-4 py-1 rounded-full text-sm flex items-center gap-2 transition-all duration-300 ${
                index === activePlatform
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {platform.name}
            </button>
          ))}
        </div>
      </div>

      {/* Zone de preuve */}
      <div className="relative group overflow-hidden">
        {/* Bordure animée */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-xl blur opacity-80" />

        {/* Contenu */}
        <div className="relative bg-black rounded-lg overflow-hidden">
          <div className="aspect-video w-full relative overflow-hidden">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                  index === activePlatform
                    ? "translate-x-0 opacity-100"
                    : slideDirection === "right"
                      ? index < activePlatform
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0"
                      : index < activePlatform
                        ? "translate-x-full opacity-0"
                        : "-translate-x-full opacity-0"
                }`}
              >
                <img
                  src={platform.image}
                  alt={`Preuve de réalisation ${platform.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicateurs de position */}
      <div className="flex justify-center mt-4 gap-2">
        {platforms.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activePlatform
                ? "bg-gradient-to-r from-cyan-400 to-teal-400 w-4"
                : "bg-gray-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
