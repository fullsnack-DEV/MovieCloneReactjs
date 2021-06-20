import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApi from "../Hooks/UseApi";
import { getdetail } from "../API/Endpoints";
import { Ratingscom } from "./ratingscom";
import { useDispatch, useSelector } from "react-redux";
import { Addtofav } from "../Redux/actioncreator";
//Adding Dispatch in on the buttons

export const DetailCom = ({ img, description, ratings, title, id }) => {
  const [name, Setname] = useState("Remind Later");

  const dispatch = useDispatch();

  //handler
  const dispatchhhandler = ({ title, img, description, id }) => {
    dispatch(Addtofav(title, img, description, id));
    Setname("Added...");
  };

  const data = useSelector((state) => state.fav);

  console.log("this is fav data", data);

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
              marginLeft: "180px",

              cursor: "pointer",
              border: "2px solid #fff",
            }}
            src={getposter(img)}
            alt="poster"
          />
        </div>
        <div className="detail__content__description">
          <h1 className="detail__description__heading">{title}</h1>
          <p> {description}</p>
          <div className="detail__description__rating">
            <Ratingscom stars={ratings / 2} />
          </div>
          <div className="detail__btncontainer">
            <a className="detail__btn">Book Now</a>
            <a
              className="detail__btn"
              onClick={() => dispatchhhandler(title, img, description, id)}
            >
              {name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
