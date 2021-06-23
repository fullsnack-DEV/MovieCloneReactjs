import React, { useState } from "react";
import { useCallback } from "react";
import { Cinema } from "./cinema";
import { TabsectionOneCom } from "./tabsectiononeCom";
export const TabsCom = () => {
  const [date, Setdate] = useState();

  //Handler

  // const callback = (date) => {
  //   Setdate(date);
  // };

  const callback = useCallback(
    (date) => {
      Setdate(date);
    },
    [date]
  );

  console.log(`This is the Date ${date}`);

  const [togle, Settogle] = useState(1);

  //chandling the events on a button
  const btnhandler = (index) => {
    //do something ?
    Settogle(index);
  };
  const seats = [...Array(144).keys()];

  return (
    <div className="tabs">
      <div className="tabs__container center ">
        <div className="tabs__block">
          <div
            className={togle === 1 ? "tab active" : "tab"}
            onClick={() => Settogle(1)}
          >
            <div className="tabs__headings">Choose Session</div>
          </div>
          <div
            className={togle === 2 ? "tab active" : "tab"}
            onClick={() => Settogle(2)}
          >
            <div className="tabs__headings">Select Seats</div>
          </div>
          <div
            className={togle === 3 ? "tab active" : "tab"}
            onClick={() => Settogle(3)}
          >
            <div className="tabs__headings">Payment</div>
          </div>
        </div>

        {/* 
            
                Tabs Content
            
            
            
        */}

        <div className="tabs__content">
          <div className={togle === 1 ? "content" : "content hidden"}>
            {/* //importing a Seprate Section for Content */}
            <TabsectionOneCom parentCallback={callback} />
            <div
              style={{
                padding: "10px",
                width: "200px",
                background: "orangered",
                fontSize: "1.5rem",
                textAlign: "center",
                cursor: "pointer",
                display: "flex",
              }}
              onClick={() => btnhandler(2)}
            >
              Click it to move Forward
            </div>
          </div>
          <div className={togle === 2 ? "content" : "content hidden"}>
            <Cinema seats={seats} />
            <div
              style={{
                padding: "10px",
                width: "200px",
                background: "orangered",
                fontSize: "1.5rem",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => btnhandler(3)}
            >
              Click it to move Forward
            </div>
          </div>
          <div className={togle === 3 ? "content" : "content hidden"}>
            <h2>Tabs Content Three</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
