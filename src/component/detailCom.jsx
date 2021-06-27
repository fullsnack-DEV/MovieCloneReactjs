import React, { useState } from "react";

import { Ratingscom } from "./ratingscom";
import { useDispatch, useSelector } from "react-redux";
import { Addtofav, Removefromfav } from "../Redux/actioncreator";
//Adding Dispatch in on the buttons

export const DetailCom = ({
  img,
  description,
  ratings,
  title,
  id,
  btntitle,
}) => {
  const [name, Setname] = useState(btntitle);

  const dispatch = useDispatch();

  //handler
  const Adddispatchhhandler = (title, img, description, id, ratings) => {
    dispatch(Addtofav(title, img, description, id, ratings));
    Setname("Added...");
  };

  const Removedispatchhandler = (id) => {
    dispatch(Removefromfav(id));
  };

  const data = useSelector((state) => state);

  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  //with the help of this ID we can Query the Information

  return (
    <div className="detail__container center">
      <div className="detail__content  flex-ai-c">
        <img
          className="detail__content__images"
          src={getposter(img)}
          alt="poster"
        />

        <div className="detail__content__description">
          <h1 className="detail__content__heading">{title}</h1>
          <p> {description}</p>

          <Ratingscom
            className="detail__description__rating"
            stars={ratings / 2}
          />

          {name === "Remind Later" ? (
            <div className="detail__btncontainer">
              <a className="detail__btn">Book Now</a>
              <a
                className="detail__btn"
                onClick={() =>
                  Adddispatchhhandler(title, img, description, id, ratings)
                }
              >
                {name}
              </a>
            </div>
          ) : (
            <div className="detail__btncontainer">
              <a className="detail__btn">Book Now</a>
              {name === "Added..." ? (
                <a className="detail__btn">{name}</a>
              ) : (
                <a
                  className="detail__btn"
                  onClick={() => Removedispatchhandler(id)}
                >
                  {name}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
