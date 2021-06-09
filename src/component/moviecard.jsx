import React, { useEffect } from "react";
import useApi from "../Hooks/UseApi";
import { getmovies } from "../API/Endpoints";
import Playbtn from "../Assets/Image/play.png";
import Play from "../Assets/Image/play-button.png";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

//shufflimg the array of the movies so that it don't repeat

export const MovieCom = ({ endpoint, title, top, p }) => {
  const history = useHistory();

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

  //function to shuffle the movie array

  function shuffle(movies) {
    return movies.sort(() => Math.random() - 0.5);
  }

  let shuffledmovies = shuffle(movies);

  //getting poster Path
  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <>
      <div className="row">
        <div className="row__title">
          {top ? (
            <img
              style={{ width: "50px", marginLeft: "85px" }}
              src={Playbtn}
              alt=""
            />
          ) : (
            <img
              style={{ width: "50px", marginLeft: "85px" }}
              src={Play}
              alt=""
            />
          )}
          <div className="row__textwrapper">
            <h2>{title}</h2>
            {p ? (
              <p>
                Grab Your
                <span className="row__textwrapper--span1">Subscription</span>
                now!
              </p>
            ) : (
              <p>
                Book Your <span className="row__textwrapper--span2">Seats</span>
                Now!
              </p>
            )}
          </div>
        </div>
        <div className="row__movies">
          {top
            ? movies.splice(0, 10).map((movie, i) => (
                <div className="row__imgcontainer">
                  <img
                    key={`movie.id.toString()`}
                    style={{
                      width: "200px",
                      marginLeft: "100px",
                      borderRadius: "10%",
                      cursor: "pointer",
                    }}
                    src={getposter(movie.poster_path)}
                    alt={movie.name}
                    onClick={() => history.push("./detail")}
                  />
                  {top ? <h1 className="row__nums">{i + 1} </h1> : null}
                </div>
              ))
            : shuffledmovies.map((movie, i) => (
                <div className="row__imgcontainer">
                  <img
                    key={`movie.id.toString()`}
                    style={{
                      width: "210px",
                      marginLeft: "50px",
                      borderRadius: "10%",
                      cursor: "pointer",
                    }}
                    src={getposter(movie.poster_path)}
                    alt={movie.name}
                    onClick={() => history.push("./detail")}
                  />
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

//Movie card Component
