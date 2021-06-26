import React, { useState } from "react";
import { gettime } from "../Redux/actioncreator";
import { useDispatch } from "react-redux";
export const Timecom = () => {
  const dispatch = useDispatch();

  const timehandler = (i, time) => {
    dispatch(gettime(time));
    Setactive(i);
  };

  const [active, Setactive] = useState(false);

  const times = [
    { time: "9:00" },

    { time: "12:00" },

    { time: "3:00" },

    { time: "6:00" },

    { time: "8:00" },
  ];

  return (
    <div className="timecontainer">
      {React.Children.toArray(
        times.map((time, i) => {
          return (
            <div className="timecontainer__time">
              <div
                className={
                  active === i
                    ? `timecontainer__times timecontainer__times--${i}`
                    : "timecontainer__times"
                }
                onClick={() => timehandler(i, time.time)}
              >
                {time.time}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
