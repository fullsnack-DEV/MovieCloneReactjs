import React from "react";
import tomato from "../Assets/Image/tomato.png";
import popcorn from "../Assets/Image/popcorn.png";
import IMDB from "../Assets/Image/imdb.png";
export const Stats = ({ votes, time }) => {
  //to convet into the time
  const convert = (n) => {
    const hours = Math.floor(n / 60);
    const min = n % 60;
    return `${hours}hr : ${min}minutes`;
  };

  return (
    <div className="stats">
      <div className="stats__title">
        <h1>Ratings</h1>
      </div>
      <div className="stats__container">
        <div className="stats__tomato">
          <img style={{ height: "80px", width: "80px" }} src={tomato} alt="" />
          <h2>
            <span>{votes * 10}%</span> Fresh
          </h2>
        </div>
        <div className="stats__runtime">
          <img style={{ height: "80px", width: "80px" }} src={popcorn} alt="" />
          <h2>{convert(time)}</h2>
        </div>
        <div className="stats__voting">
          <img style={{ height: "80px", width: "80px" }} src={IMDB} alt="" />
          <h2>56</h2>
        </div>
      </div>
    </div>
  );
};
