import React from "react";

export const ButtomCom = ({ onClick, title, style }) => {
  return (
    <div style={style} onClick={onClick} className="utils__button">
      <h2> {title} </h2>
    </div>
  );
};
