"use client";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";

const actions = [
  {
    image: EmailIcon,
    name: "Contactez-moi",
    url: "mailto:emir.metis.sen@gmail.com",
  },
  {
    image: LinkedInIcon,
    name: "Mon linkedin",
    url: "https://www.linkedin.com/in/emir-sen-522475271/",
  },
  { image: GitHubIcon, name: "Mon github", url: "https://github.com/Emiiir95" },
];

export function SocialComponentVertical() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 850;
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isScrolled && (
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          icon={<AccountIcon />}
          sx={{
            "& .MuiFab-primary": {
              backgroundColor: "#27272A",
              "&:hover": {
                backgroundColor: "darkviolet",
              },
            },
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={
                <a href={action.url} target="_blank" rel="noopener noreferrer">
                  <action.image />
                </a>
              }
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      )}
    </>
  );
}

export function SocialComponentHorizontal() {
  return (
    <div className="w-52 bg-[#27272A] h-12 rounded-full flex items-center gap-7 justify-center p-4">
      {actions.map((action, index) => (
        <a
          key={index}
          href={action.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <action.image
            style={{ width: "100%", height: "100%" }}
            className="hover:text-[#815CFC] hover:rotate-12 transition-transform duration-75 "
          />
        </a>
      ))}
    </div>
  );
}
