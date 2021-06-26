import React, { useState, useEffect } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";

import useApi from "../Hooks/useApi";
import { getupcoming } from "../API/Endpoints";
import { useHistory } from "react-router-dom";

import { useMedia } from "../Hooks/useMedia";

export const Moviebars = () => {
  const isphone = useMedia("(max-width: 400px)");

  const { data: bars, error, loading, request: loadbars } = useApi(getupcoming);
  const [name, Setname] = useState();

  useEffect(() => {
    loadbars();
    Setname("Streaming Now");
  }, [loadbars]);

  //routing
  const history = useHistory();

  const handler = (id) => {
    history.push(`/detail/${id}`);
  };

  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  //Now in for this animation to run on mobile screens we have to build the '
  //custome resizing hook and then according to the vakue of the we will set some properties
  //for example during mobile version we will be only showing on tap animation,

  return (
    <div>
      <AnimateSharedLayout>
        <motion.section className="container-bar flex">
          {isphone
            ? React.Children.toArray(
                bars.slice(0, 6).map((bar, i) => {
                  return (
                    <motion.div
                      onMouseEnter={() => Setname(bar.title)}
                      onMouseLeave={() => Setname("Straming Now")}
                      animate={{
                        width: "10%",
                      }}
                      className="right"
                      whileTap={{
                        width: "350%",

                        transition: { duration: "0.2", ease: "easeIn" },
                      }}
                      style={{
                        height: "50vh",
                        border: "2px solid #fff",

                        backgroundPosition: "center",
                        background: `url(${getposter(bar.poster_path)})`,
                        overflow: "hidden",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></motion.div>
                  );
                })
              )
            : React.Children.toArray(
                bars.slice(0, 10).map((bar, i) => {
                  return (
                    <motion.div
                      onMouseEnter={() => Setname(bar.title)}
                      onMouseLeave={() => Setname("Straming Now")}
                      animate={{
                        width: "5%",
                      }}
                      className="right"
                      whileHover={{
                        width: "25%",

                        transition: { duration: "0.2", ease: "easeIn" },
                      }}
                      style={{
                        height: "50vh",
                        border: "2px solid #fff",

                        backgroundPosition: "center",
                        background: `url(${getposter(bar.poster_path)})`,
                        overflow: "hidden",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></motion.div>
                  );
                })
              )}
        </motion.section>
        <h2 className="heading-bar">{name}</h2>
      </AnimateSharedLayout>
    </div>
  );
};
