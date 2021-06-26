import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtomCom } from "./btncom";
import { getticket } from "../Redux/actioncreator";
export const PaymentCom = () => {
  const dispatch = useDispatch();
  //dispatcher
  const ticketdispatcher = (date, day, time) => {
    dispatch(getticket(date, day, time));
  };

  //importing  aStore Data for Payments
  const date = useSelector((state) => state.dates);
  const time = useSelector((state) => state.time);
  const price = useSelector((state) => state.price);

  return (
    <div className="pay">
      <div className="pay__container">
        <div className="pay__date">
          <h2>Date</h2>
          {date.map((d, i) => {
            return (
              <div key={i} className="pay__date--container">
                {d.date}
              </div>
            );
          })}
        </div>
        <div className="pay__time">
          <h2>Time</h2>
          {time.map((t, i) => {
            return (
              <div key={i} className="pay__time--container">
                {t.time}
              </div>
            );
          })}
        </div>

        <div className="pay__price">
          <h2>Seats</h2>
          {price.map((p, i) => {
            return (
              <div key={i} className="pay__price--container">
                {p.price}
              </div>
            );
          })}
        </div>
      </div>
      <div className="pay__total">
        {price.map((p, i) => {
          const total = p.price * 150;
          return (
            <ButtomCom
              key={i}
              style={{ padding: "10px", width: "150px", fontSize: "1.3rem" }}
              title={`Pay $ ${total} !`}
            />
          );
        })}
      </div>
    </div>
  );
};
