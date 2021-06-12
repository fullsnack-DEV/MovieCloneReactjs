import React, { useEffect } from "react";
import { CinemaScreen } from "../component/CinemaScreen";
import { DetailCom } from "../component/detailCom";
import useApi from "../Hooks/UseApi.jsx";
import { getdetail } from "../API/Endpoints";
import { useParams } from "react-router";
import { Stats } from "../component/stats";
import { TabsCom } from "../component/tabsCom";

//code
export const DetailPage = () => {
  const { id } = useParams();

  const {
    request: loadmovies,
    data: movie,
    error,
    loading,
  } = useApi(getdetail, id);

  useEffect(() => {
    loadmovies();
  }, []);

  console.log(movie);

  //getting the Movie Backdrop

  return (
    <>
      <DetailCom
        img={movie.poster_path}
        description={movie.overview}
        ratings={movie.vote_average}
        title={movie.title}
      />
      <Stats votes={movie.vote_average} time={movie.runtime} />
      <TabsCom />
      <CinemaScreen />
    </>
  );
};
