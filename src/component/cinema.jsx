import React from "react";

export const Cinema = () => {
  //Creating the Dummy Seats
  const seats = [...Array(144).keys()];

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
