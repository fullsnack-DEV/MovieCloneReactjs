import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Play from "../Assets/Image/icons.png";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
export const Header = () => {
  const favs = useSelector((state) => state.fav);

  //Displaying the no of the items

  const favitems = favs.length;

  //handler
  const history = useHistory();

  const routehandler = () => {
    history.push("/fav");
  };

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
              {favitems === 0 ? (
                <Link to="/fav">
                  <a href="/">Reminders</a>
                  {/* <span className="header__nav-span">{favitems}</span> */}
                </Link>
              ) : (
                <Link to="/fav">
                  <a href="/">Reminders</a>
                  <span className="header__nav-span">{favitems}</span>
                </Link>
              )}
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
