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
import { useRef } from "react";
export const HomePage = () => {
  return (
    <div style={{ marginBottom: "8rem" }}>
      {/* <Header /> */}
      <Banner />
      <MovieCom endpoint={getmovies} title={"Opening this Week"} istop />
      <MovieCom endpoint={getnowplaying} title={"Now in Theaters"} />
      <MovieCom endpoint={getupcoming} title={"Coming Soon"} />
      <MovieCom endpoint={Ontheair} title={"Streaming On Tv"} p />
    </div>
  );
};

//TODO
//To build a Custome Hook that will fetch the data
//Make aUSe of Redux To implement Add to Cart Functionality
