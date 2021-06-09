import React from "react";
import { Header } from "../component/header";
import { Banner } from "../component/banner";
import { MovieCom } from "../component/moviecard";
import { getmovies, getupcoming } from "../API/Endpoints";
export const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <MovieCom endpoint={getmovies} title={"premiere"} top />
      <MovieCom endpoint={getupcoming} title={"premiere"} />
    </>
  );
};

//TODO
//To build a Custome Hook that will fetch the data
//Make aUSe of Redux To implement Add to Cart Functionality
