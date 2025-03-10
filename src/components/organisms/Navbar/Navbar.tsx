import React from "react";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import BalanceIcon from "@mui/icons-material/Balance";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";

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

  return (
    <div className="flex items-center backdrop-blur-md bg-opacity-30 bg-[#000000] border-3 border-[#5914C4] justify-center md:gap-6 gap-3 p-1 fixed bottom-16 left-1/2 transform -translate-x-1/2 md:w-96 w-72 z-50 transition-colors duration-300 md:p-2 rounded-xl">
      {navItems.map((item, index) => (
        <Tooltip key={index} title={item.title} arrow>
          <Link to={item.to} className="text-white">
            <IconButton>{item.icon}</IconButton>
          </Link>
        </Tooltip>
      ))}
    </div>
  );
}
