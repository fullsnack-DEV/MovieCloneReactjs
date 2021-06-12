import React, { useState } from "react";
import { Cinema } from "./cinema";

export const TabsCom = () => {
  const [togle, Settogle] = useState(1);

  //handler function

  const tabhandle = (index) => {
    Settogle(index);
  };

  return (
    <div className="tabs">
      <div className="tabs__container center ">
        <div className="tabs__block">
          <div
            className={togle === 1 ? "tab active" : "tab"}
            onClick={() => Settogle(1)}
          >
            <div className="tabs__headings">Book Your Dates</div>
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

        <div className="tabs__content">
          <div className={togle === 1 ? "content" : "content hidden"}>
            Content One
          </div>
          <div className={togle === 2 ? "content" : "content hidden"}>
            <Cinema />
          </div>
          <div className={togle === 3 ? "content" : "content hidden"}>
            <h2>Tabs Content Three</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
