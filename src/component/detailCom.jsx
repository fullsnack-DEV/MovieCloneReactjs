import React, { useEffect } from "react";
import { useParams } from "react-router";
import useApi from "../Hooks/UseApi";
import { getdetail } from "../API/Endpoints";
import { Ratingscom } from "./ratingscom";

export const DetailCom = ({ img, description, ratings, title }) => {
  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

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
            src={getposter(img)}
            alt=""
          />
        </div>
        <div className="detail__content__description">
          <h1 className="detail__description__heading">{title}</h1>
          <p> {description}</p>
          <div className="detail__description__rating">
            <Ratingscom stars={ratings / 2} />
          </div>
          <div className="detail__btncontainer">
            <a className="detail__btn " href="">
              Book Now
            </a>
            <a href="" className="detail__btn ">
              Remind Later
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
