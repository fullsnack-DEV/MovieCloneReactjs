import React from "react";
import { useState } from "react";

export const TabsectionOneCom = React.memo(({ parentCallback, date }) => {
  const dates = [
    { date: 23, day: "Mon" },
    { date: 24, day: "Tue" },
    { date: 25, day: "Wed" },
    { date: 26, day: "Fri" },
    { date: 27, day: "Sat" },
    { date: 28, day: "Sun" },
  ];

  const dates2 = [
    { date: 5, day: "Mon" },
    { date: 6, day: "Tue" },
    { date: 7, day: "Wed" },
    { date: 8, day: "Fri" },
    { date: 9, day: "Sat" },
    { date: 10, day: "Sun" },
  ];

  return (
    <div className="tabsection">
      <div className="tabsection__one">
        <h2 className="tabsection__title">This Week</h2>
        <div className="tabsection__item">
          {React.Children.toArray(
            dates.map((date) => {
              return (
                <div className="tabsection__dates">
                  <div className="date">
                    <span className="day"> {date.day} </span>
                    {date.date}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className="tabsection__one">
        <h2 className="tabsection__title">Next Week</h2>
        <div className="tabsection__item">
          {React.Children.toArray(
            dates2.map((date) => {
              return (
                <div className="tabsection__dates">
                  <div className="date">
                    <span className="day"> {date.day} </span>
                    {date.date}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
});
