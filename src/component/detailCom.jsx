import React, { useEffect } from "react";
import { useParams } from "react-router";
import useApi from "../Hooks/UseApi";
import { getdetail } from "../API/Endpoints";
import { Ratingscom } from "./ratingscom";

export const DetailCom = () => {
  //Querying the Data for the specific ID
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

  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  console.log(`this is adult ${movie.adult}`);

  //with the help of this ID we can Query the Information

  return (
    <div className="detail__container center">
      <div className="detail__content">
        <div className="detail__content__img">
          <img
            style={{
              width: "250px",
              marginLeft: "100px",
              borderRadius: "10%",
              cursor: "pointer",
              border: "2px solid orchid",
            }}
            src={getposter(movie.poster_path)}
            alt=""
          />
        </div>
        <div className="detail__content__description">
          <h1 className="detail__description__heading">{movie.title}</h1>
          <p>{movie.overview}</p>
          <div className="detail__description__rating">
            <Ratingscom stars={movie.vote_average / 2} />
          </div>
        </div>
      </div>
    </div>
  );
};
