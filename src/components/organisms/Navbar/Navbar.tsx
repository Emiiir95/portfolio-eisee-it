import React from "react";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import BalanceIcon from "@mui/icons-material/Balance";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import {
  Drawer,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { SocialHorizontal } from "../SocialHorizontal";

const navItems = [
  {
    title: "Accueil",
    to: "/",
    icon: <HomeIcon className="text-white" />,
  },
  {
    title: "Entreprise",
    to: "/Entreprise",
    icon: <BusinessIcon className="text-white" />,
  },
  {
    title: "Projet",
    to: "/Projet",
    icon: <AccountTreeIcon className="text-white" />,
  },
  {
    title: "Veille",
    to: "/Veille",
    icon: <CircleNotificationsIcon className="text-white" />,
  },
  {
    title: "Bilan",
    to: "/Bilan",
    icon: <BalanceIcon className="text-white" />,
  },
];

export function Navbar() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
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
      {isMobile ? (
        <div
          className={clsx(
            "flex justify-end fixed top-0 right-0 w-auto transition-colors duration-300 p-2 z-50 rounded-bl-2xl gap-5 items-center",
            isScrolled
              ? "backdrop-blur-md bg-opacity-70 bg-[#5914C4] "
              : "bg-transparent",
          )}
        >
          <IconButton onClick={toggleDrawer(true)}>
            <DehazeIcon className="text-white" />
          </IconButton>
          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            anchor="left"
            PaperProps={{
              sx: {
                backgroundColor: "black",
                width: "300px",
                borderRadius: "0 30px 30px 0",
                p: 7,
                boxShadow: "0px 4px 12px #fff",
                borderRight: "1px solid #fff",
              },
            }}
          >
            {open && (
              <div
                className="w-[300px] h-full flex flex-col gap-5"
                onClick={toggleDrawer(false)}
              >
                {navItems.map((item, index) => (
                  <Link to={item.to} key={index}>
                    <IconButton className="flex gap-4">
                      {item.icon}
                      <Typography color="white">{item.title}</Typography>
                    </IconButton>
                  </Link>
                ))}
                <div className="absolute bottom-5 w-52 left-1/2 -translate-x-1/2">
                  <SocialHorizontal />
                </div>
              </div>
            )}
          </Drawer>
        </div>
      ) : (
        <div
          className={clsx(
            "flex items-center justify-center gap-6 fixed top-5 left-1/2 transform -translate-x-1/2 w-96 z-50 transition-colors duration-300 p-2 rounded-xl",
            isScrolled
              ? "backdrop-blur-md bg-opacity-30 bg-[#000000] border-3 border-[#5914C4]"
              : "bg-transparent",
          )}
        >
          {navItems.map((item, index) => (
            <Tooltip key={index} title={item.title} arrow>
              <Link to={item.to} className="text-white">
                <IconButton>{item.icon}</IconButton>
              </Link>
            </Tooltip>
          ))}
        </div>
      )}
    </>
  );
}
