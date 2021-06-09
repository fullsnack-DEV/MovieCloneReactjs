import React, { useEffect } from "react";
import useApi from "../Hooks/UseApi";
import { getmovies } from "../API/Endpoints";
import Playbtn from "../Assets/Image/play.png";

export const MovieCom = ({ endpoint, title, top }) => {
  const {
    error,
    loading,
    data: movies,
    request: loadmovies,
  } = useApi(endpoint);

  //useEffect
  useEffect(() => {
    loadmovies();
  }, []);

  console.log(movies);

  //getting poster Path
  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <>
      <div className="row">
        <div className="row__title">
          <img
            style={{ width: "50px", marginLeft: "85px" }}
            src={Playbtn}
            alt=""
          />
          <div className="row__textwrapper">
            <h2>{title}</h2>
            <p>Book Your Seats Now!</p>
          </div>
        </div>
        <div className="row__movies">
          {movies.splice(0, 10).map((movie, i) => (
            <div className="row__imgcontainer">
              <img
                key={`movie.id.toString()`}
                style={{
                  width: "200px",
                  marginLeft: "100px",
                  borderRadius: "10%",
                }}
                src={getposter(movie.poster_path)}
                alt={movie.name}
              />
              {top ? <h1 className="row__nums">{i + 1} </h1> : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

//Movie card Component
