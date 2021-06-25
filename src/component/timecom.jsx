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
    { time: "9:00 am To 11:15 am" },

    { time: "12:00 pm To 2:00 pm" },

    { time: "3:00 pm To 5:16pm" },

    { time: "6:00 pm To 8:15 pm" },
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
