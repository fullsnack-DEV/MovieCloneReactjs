import React, { useEffect } from "react";
import { CinemaScreen } from "../component/CinemaScreen";
import { DetailCom } from "../component/detailCom";
import useApi from "../Hooks/UseApi.jsx";
import { getdetail } from "../API/Endpoints";
import { useParams } from "react-router";
import { Stats } from "../component/stats";
import { TabsCom } from "../component/tabsCom";
import { useDispatch, useSelector } from "react-redux";
import { Addtofav } from "../Redux/actioncreator";
import { useLocation } from "react-router-dom";

//code
export const DetailPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  const {
    request: loadmovies,
    data: movie,
    error,
    loading,
  } = useApi(getdetail, id);

  useEffect(() => {
    window.scrollTo(0, 0); //this is to scroll the page at the top while rendering
    loadmovies();
  }, [loadmovies]);

  //getting the Movie Backdrop

  return (
    <div>
      <DetailCom
        img={movie.poster_path}
        description={movie.overview}
        ratings={movie.vote_average}
        title={movie.title}
        id={movie.id}
        btntitle={"Remind Later"}
      />
      <Stats votes={movie.vote_average} time={movie.runtime} />
      <TabsCom />
      <CinemaScreen />
    </div>
  );
};
