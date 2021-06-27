import React, { useRef, useEffect } from "react";
import { Header } from "../component/header";
import { Banner } from "../component/banner";
import { MovieCom } from "../component/moviecard";
import { useMedia } from "../Hooks/useMedia";
import {
  getmovies,
  getnowplaying,
  getupcoming,
  Ontheair,
} from "../API/Endpoints";

export const HomePage = () => {
  const isphone = useMedia("(max-width: 500px)");

  const MoviesRef = useRef();
  const TVRef = useRef();

  const handleRefclickMovie = () => {
    MoviesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleRefclickTV = () => {
    TVRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="HomePage">
      {!isphone && (
        <Header
          onClickTv={() => handleRefclickTV()}
          onClickMovie={() => handleRefclickMovie()}
        />
      )}
      <Banner />
      <MovieCom
        refermovie={MoviesRef}
        endpoint={getmovies}
        title={"Opening this Week"}
        istop
      />
      <MovieCom endpoint={getnowplaying} title={"Now in Theaters"} />
      <MovieCom endpoint={getupcoming} title={"Coming Soon"} />
      <MovieCom refer={TVRef} endpoint={Ontheair} title={"Streaming On Tv"} p />
    </div>
  );
};

//TODO
//To build a Custome Hook that will fetch the data
//Make aUSe of Redux To implement Add to Cart Functionality
