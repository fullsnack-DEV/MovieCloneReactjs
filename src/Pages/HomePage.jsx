import React from "react";
import { Header } from "../component/header";
import { Banner } from "../component/banner";
import { MovieCom } from "../component/moviecard";
import {
  getmovies,
  getnowplaying,
  getupcoming,
  Ontheair,
} from "../API/Endpoints";
export const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <MovieCom endpoint={getmovies} title={"premiere"} top />
      <MovieCom endpoint={getnowplaying} title={"Now in Theaters"} />
      <MovieCom endpoint={getupcoming} title={"Popular"} />
      <MovieCom endpoint={Ontheair} title={"Streaming On Tv"} p />
    </>
  );
};

//TODO
//To build a Custome Hook that will fetch the data
//Make aUSe of Redux To implement Add to Cart Functionality
