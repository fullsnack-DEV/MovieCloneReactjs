import React from "react";

export const Cinema = ({ seats }) => {
  //Creating the Dummy Seats

  return (
    <>
      <div className="Cinema">
        <div className="Cinema__container">
          <div className="Cinema__Screen" />
          <div className="Cinema__Seats">
            {seats.map((seat) => {
              return <span key={seat} className="Cinema__Seat" />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
