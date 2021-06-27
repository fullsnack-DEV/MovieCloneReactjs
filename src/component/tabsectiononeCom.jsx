import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimateSharedLayout, motion } from "framer-motion";
import { getdates } from "../Redux/actioncreator";
import { Timecom } from "../component/timecom";
import { ButtomCom } from "./btncom";

export const TabsectionOneCom = React.memo(({ parentCallback, onClick }) => {
  const [active, setActive] = useState();
  console.log(active);

  // const date = useSelector((state) => state.dates);

  // console.log(date);

  //handler to handle the paretncallback and active state

  const dispatch = useDispatch();

  const dispatchhandler = (date, day, index) => {
    dispatch(getdates(date, day));
    setActive(index);
  };

  const dates = [
    { date: 23, day: "Mon" },
    { date: 24, day: "Tue" },
    { date: 25, day: "Wed" },
    { date: 26, day: "Fri" },
    { date: 27, day: "Sat" },
    { date: 28, day: "Sun" },
  ];

  return (
    <div className="tabsection flex-fc">
      <div className="tabsection__one">
        <h2 className="tabsection__title">This Week</h2>

        <Timecom />

        <div className="tabsection__item  flex">
          {React.Children.toArray(
            dates.map((date, i) => {
              return (
                <div className="tabsection__dates">
                  <div
                    className={active === i ? `date date--${i}` : "date"}
                    onClick={() => dispatchhandler(date.date, date.day, i)}
                  >
                    <span className="day"> {date.day} </span>
                    {date.date}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <ButtomCom title="Next" onClick={onClick} />
    </div>
  );
});
