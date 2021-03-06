import React, { useEffect, useRef } from "react";
import { CinemaScreen } from "../component/CinemaScreen";
import { DetailCom } from "../component/detailCom";
import useApi from "../Hooks/UseApi";
import { getdetail } from "../API/Endpoints";
import { useParams } from "react-router";
import { Stats } from "../component/stats";
import { TabsCom } from "../component/tabsCom";

//code
export const DetailPage = () => {
  const BookRef = useRef();

  const { id } = useParams();

  const { request: loadmovies, data: movie } = useApi(getdetail, id);

  useEffect(() => {
    window.scrollTo(0, 0); //this is to scroll the page at the top while rendering
    loadmovies();
  }, [loadmovies]);

  //Scroll to Book Sec
  const handleScrooltobook = () => {
    BookRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //getting the Movie Backdrop

  return (
    <div style={{ overflow: "hidden" }}>
      <DetailCom
        img={movie.poster_path}
        description={movie.overview}
        ratings={movie.vote_average}
        title={movie.title}
        id={movie.id}
        btntitle={"Remind Later"}
        Onclickref={() => handleScrooltobook()}
      />
      <Stats votes={movie.vote_average} time={movie.runtime} />
      <TabsCom refBook={BookRef} />
      <CinemaScreen />
    </div>
  );
};
