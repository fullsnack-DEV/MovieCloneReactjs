import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtomCom } from "./btncom";
import { getticket } from "../Redux/actioncreator";
import { TicketCom } from "./TicketCom";
import Closeicon from "../Assets/Image/cancelicon.png";
export const PaymentCom = () => {
  //State var for Toggle the Model
  const [Modal, setModal] = useState(false);

  const Modalhandler = () => {
    setModal(!Modal);
  };

  const dispatch = useDispatch();
  //dispatcher
  const ticketdispatcher = (date, day, time) => {
    dispatch(getticket(date, day, time));
  };

  //importing  aStore Data for Payments
  const date = useSelector((state) => state.dates);
  const time = useSelector((state) => state.time);
  const price = useSelector((state) => state.price);

  //Extracting the Valus from State. WE can also loop throught it BTW
  const Price = price[0];
  const Time = time[0];
  const Date = date[0];

  return (
    <div className="pay">
      <div className="pay__container">
        <div className="pay__date">
          <h2>Day</h2>

          <div className="pay__date--container">{Date.date}</div>
        </div>
        <div className="pay__time">
          <h2>Time</h2>

          <div className="pay__time--container">{Time.time}</div>
        </div>

        <div className="pay__price">
          <h2>Seats</h2>

          <div className="pay__price--container">{Price.price}</div>
        </div>
      </div>
      <div className="pay__total">
        <ButtomCom
          onClick={Modalhandler}
          style={{ padding: "10px", width: "150px", fontSize: "1.3rem" }}
          title={`Pay $ ${Price.price * 150} !`}
        />
      </div>

      {/* This is for the Modal to Show onClick */}

      {Modal && (
        <div className="pay__modal">
          <div onClick={Modalhandler} className="pay__modal__overlay">
            <img
              className="pay__modal__close"
              src={Closeicon}
              alt="close"
              onClick={Modalhandler}
            />
          </div>
          <div className="pay__modal__wrapper">
            <div className="pay__modal__content">
              <h2 className="fav__heading">Your Tickets</h2>

              <TicketCom
                price={Price.price}
                time={Time.time}
                date={Date.date}
                day={Date.day}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
