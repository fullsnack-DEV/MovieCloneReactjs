import React from "react";
import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();

  const routetabhandlers = (name) => {
    if (name === "Home") {
      history.push("/");
    } else if (name === "Reminder") {
      history.push("/fav");
    } else if (name === "Movie") {
      history.push("/recomanded");
    } else if (name === "Tickets") {
      history.push("/ticket");
    }
  };

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
      name: "Reminder",
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
          <ul className="tabcontainer__tabs">
            {React.Children.toArray(
              tabsicons.map((tab, index) => {
                return (
                  <li className="tabcontainer__lists">
                    <motion.img
                      src={tab.icon}
                      whileTap={{ translateY: "-20%" }}
                      alt={tab.name}
                      onClick={() => {
                        routetabhandlers(tab.name);
                      }}
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
