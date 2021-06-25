import React, { useEffect } from "react";
import useApi from "../Hooks/useApi";

import Playbtn from "../Assets/Image/play.png";
import Play from "../Assets/Image/play-button.png";
import { Link, useHistory } from "react-router-dom";
import Lottie from "react-lottie";
import animation from "../lottie.json";

//shufflimg the array of the movies so that it don't repeat

export const MovieCom = ({ endpoint, title, istop, p, ispicks }) => {
  const history = useHistory();

  const handler = (id) => {
    history.push(`/detail/${id}`);
  };

  //lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //using the custom Hook

  const {
    error,
    loading,
    data: movies,
    request: loadmovies,
  } = useApi(endpoint);

  //useEffect
  useEffect(() => {
    loadmovies();
    console.log("I am Rendering from Movie Card");
  }, [loadmovies]);

  //function to shuffle the movie array

  function shuffle(movies) {
    return movies.sort(() => Math.random() - 0.8);
  }

  let shuffledmovies = shuffle(movies);

  //Movie splicing accordig to condition

  //getting poster Path
  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <div className="row__container">
      {loading ? (
        <Lottie options={defaultOptions} height={200} width={200} />
      ) : (
        <div className="row">
          <div className="row__title flex-ai-c ">
            {istop ? (
              <img className="row__title__img" src={Playbtn} alt="" />
            ) : (
              <img className="row__title__img" src={Play} alt="" />
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
                  Book Your
                  <span className="row__textwrapper--span2">Seats</span>
                  Now!
                </p>
              )}
            </div>
          </div>
          <div className="row__movies  flex-ai-c">
            {istop
              ? React.Children.toArray(
                  movies.splice(0, 10).map((movie, i) => (
                    <div className="row__imgcontainer">
                      <img
                        className="row__imgcontainer__img"
                        src={getposter(movie.poster_path)}
                        alt={movie.name}
                        onClick={() => handler(movie.id)}
                      />
                      {istop ? <h1 className="row__nums">{i + 1} </h1> : null}
                    </div>
                  ))
                )
              : React.Children.toArray(
                  shuffledmovies.map((movie, i) => (
                    <div className="row__imgcontainer">
                      <img
                        className="row__imgcontainer__img--2"
                        src={getposter(movie.poster_path)}
                        alt={movie.name}
                        onClick={() => handler(movie.id)}
                      />
                    </div>
                  ))
                )}
          </div>
        </div>
      )}
    </div>
  );
};

//Movie card Component
