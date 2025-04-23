import { useState, useEffect, useRef } from "react";
import { Typography } from "@/components/atoms/Typography/Typography";

interface IconAndText {
  icon: React.ElementType;
  alt: string;
  label: string;
}

interface TextWithIconProps {
  tab: IconAndText[];
  title?: string;
}

export const TextWithIcon = ({
  tab,
  title = "Mes missions",
}: TextWithIconProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} className="mx-auto w-[80%] mb-24">
      <div
        className={`transition-all duration-700 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
      >
        <Typography
          variant="h1"
          color="white"
          align="center"
          weight="bold"
          animated
        >
          <span className="bg-gradient-to-b from-[#0E137C] to-white bg-clip-text text-transparent">
            {title}
          </span>
        </Typography>

        <div className="space-y-3 flex justify-center items-center flex-col sm:flex-row sm:gap-3 sm:space-y-0 md:mb-8 md:mt-12 xl:gap-8">
          {tab.map((item, index) => (
            <div
              key={index}
              className={`
                bg-gray-900/80 backdrop-blur-sm px-8 md:w-[400px] w-full py-5 
                shadow-lg flex rounded-xl gap-4 border border-gray-800 
                hover:border-purple-500/30 transition-all duration-500 transform
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
                boxShadow: "0 8px 20px -8px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-purple-800/30 blur-sm"></div>
                <item.icon
                  size={30}
                  className="relative text-white bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full p-1 h-8 w-8 min-w-8 min-h-8"
                />
              </div>
              <div className="space-y-2">
                <Typography variant="h3" weight="semibold" color="white">
                  {item.label}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
