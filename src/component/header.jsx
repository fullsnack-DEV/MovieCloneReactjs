import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Play from "../Assets/Image/icons.png";
import { Link } from "react-router-dom";
export const Header = () => {
  //handler

  return (
    <div className="header">
      <div className="header__container center flex-ai-c ">
        <div className="header__logo flex-ai-c">
          <img className="header__logo__image" src={Play} alt="LOGO" />
          <h1 className="header__logo__heading">Playit.</h1>
        </div>
        <nav className="header__nav">
          <ul className="header__nav__list flex-ai-c">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Movies</a>
            </li>
            <li>
              <a href="/">TV Shows</a>
            </li>
            <li>
              <a href="/">Fav</a>
            </li>
          </ul>
        </nav>
        <div className="header__search">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};
