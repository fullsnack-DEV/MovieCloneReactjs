import React from "react";
import Home from "../Assets/Image/hometab.png";
import Tickets from "../Assets/Image/ticketbar.png";
import Movie from "../Assets/Image/videoplayertab.png";
import Reminder from "../Assets/Image/remindertab.png";
import {
  AnimateSharedLayout,
  motion,
  AnimatePresence,
  animate,
} from "framer-motion";
import { useState } from "react";
export const Mobtabs = () => {
  const tabsicons = [
    {
      icon: Home,
      name: "Home",
    },
    {
      icon: Movie,
      name: "Movie",
    },
    {
      icon: Reminder,
      name: "REminder",
    },
    {
      icon: Tickets,
      name: "Tickets",
    },
  ];

  return (
    <>
      <AnimatePresence>
        <motion.div className="tabcontainer">
          <ul>
            {React.Children.toArray(
              tabsicons.map((tab, index) => {
                return (
                  <li>
                    <motion.img
                      src={tab.icon}
                      whileTap={{ translateY: "-20%" }}
                      alt={tab.name}
                    />
                  </li>
                );
              })
            )}
          </ul>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
