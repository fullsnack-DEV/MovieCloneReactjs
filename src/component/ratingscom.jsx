import React from "react";

export const Ratingscom = ({ stars }) => {
  //Maximum star
  const maxStar = 5;

  //Get the total value
  //getentireStar
  const fullStar = (stars / maxStar) * 100;

  //in percentage
  const fullStarPercentage = Math.round(fullStar);

  const StarStyle = () => {
    return {
      width: fullStarPercentage + "%",
    };
  };

  return (
    <div className="stars-gray">
      <br />
      <div className="stars-yellow" style={StarStyle()}></div>
    </div>
  );
};
