import React from "react";
import { TicketCom } from "../component/TicketCom";
import { useSelector } from "react-redux";

export const MobTicket = () => {
  const date = useSelector((state) => state.dates);
  const time = useSelector((state) => state.time);
  const price = useSelector((state) => state.price);

  console.log("this is price from ticet secreen", date[0]);

  const Price = price[0];
  const Time = time[0];
  const Date = date[0];

  console.log(Date.day);

  return (
    <div>
      {Date.day ? (
        <>
          <h2 className="fav__heading">Your Tickets</h2>

          <TicketCom
            price={Price.price}
            time={Time.time}
            date={Date.date}
            day={Date.day}
          />
        </>
      ) : (
        <h2 className="fav__heading">No Tickets</h2>
      )}
    </div>
  );
};
