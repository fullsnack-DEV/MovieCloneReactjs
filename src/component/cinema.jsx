import React, { useCallback } from "react";
import { useState } from "react";
import { ButtomCom } from "./btncom";
import { useDispatch } from "react-redux";
import { getprice } from "../Redux/actioncreator";
import clsx from "clsx";

export const Cinema = ({ seats, onClick }) => {
  //creating a state array to store the Selected Seats
  //intializing it with some dummy seats
  const [selectedseats, Setselectedseats] = useState([]);

  //to mimic the occupied functionality
  const occupied = [10, 5, 9, 3, 23, 80, 14, 28, 31];

  //to debug
  // console.log(`this are the Selected Seats ${selectedseats.length}`);

  //building the habdker to Set the Selected Seats
  const Selecteseathandle = (seat) => {
    const isSelected = selectedseats.includes(seat);
    //why we are checking it beause when we first select the seat on ui
    //i.e doing a onClick event isselected becomes false and then wean set the state of seats
    //but when user reclick on the same seat the isselect will be true and we will filter the seats and return the new seat state

    //to debug
    console.log("Is Slected from Selectseathandler", isSelected);

    if (isSelected) {
      const finalseat = selectedseats.filter(
        (selectedseat) => selectedseat !== seat
      );

      console.log("final Seats", finalseat);

      Setselectedseats(finalseat);
    } else {
      Setselectedseats([...selectedseats, seat]);
    }
  };

  const dispatch = useDispatch();

  //Dispatch Handler
  const dispatchseats = (chooseseats) => {
    dispatch(getprice(chooseseats));
    onClick();
  };

  return (
    <>
      <div className="Cinema  flex-fc-ai-c ">
        <div className="Cinema__container">
          <div className="Cinema__Screen" />

          <div className="Cinema__info">
            <li>
              <span className="Cinema__Seat Cinema__Seat--3 " />
              <h3>
                <small>N/A</small>
              </h3>
            </li>
            <li>
              <span className=" Cinema__Seat  Cinema__Seat--selected  Cinema__Seat--selected--1" />
              <h3>
                <small>Selected Seats</small>
              </h3>
            </li>
            <li>
              <span className="Cinema__Seat  Cinema__Seat--occupied Cinema__Seat--occupied--2" />
              <h3>
                <small>Occupied Seats </small>
              </h3>
            </li>
          </div>

          <div className="Cinema__Seats">
            {seats.map((seat) => {
              const isselected = selectedseats.includes(seat);
              const isoccupied = occupied.includes(seat);
              // console.log(isselected);

              return (
                <span
                  key={seat}
                  className={clsx(
                    "Cinema__Seat",
                    isselected && " Cinema__Seat  Cinema__Seat--selected",
                    isoccupied && "Cinema__Seat  Cinema__Seat--occupied"
                  )}
                  onClick={isoccupied ? null : () => Selecteseathandle(seat)}
                />
              );
            })}
          </div>
        </div>

        <div style={{ marginLeft: "8rem" }}>
          <h1 style={{ marginTop: "3rem", marginBottom: "-3rem" }}>
            Seats Booked {selectedseats.length}
          </h1>
          <ButtomCom onClick={() => dispatchseats(selectedseats.length)} />
        </div>
      </div>
    </>
  );
};

// isselected && isoccupied
// ? " Cinema__Seat  Cinema__Seat--selected" ||
//   " Cinema__Seat  Cinema__Seat--occupied"
// : "Cinema__Seat"
