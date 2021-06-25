import React, { useState } from "react";
import { useCallback } from "react";
import { Cinema } from "./cinema";
import { TabsectionOneCom } from "./tabsectiononeCom";

import { useMedia } from "../Hooks/useMedia";
export const TabsCom = () => {
  //dates to display on a last Payment Screen
  // const [date, Setdate] = useState({ date: "null", day: "null" });

  //State to save the Selected seats

  // console.log(date);

  //this for toggling the tabs
  const [togle, Settogle] = useState(1);

  //chandling the events on a button
  const btnhandler = (index) => {
    //toggling index so that we can move forward with button
    Settogle(index);
  };

  const phone = useMedia("(max-width: 400px)");

  const seats = phone ? [...Array(54).keys()] : [...Array(120).keys()];

  return (
    <div className="tabs">
      <div className="tabs__container center flex-fc ">
        <div className="tabs__block  flex-ai-c">
          <div
            className={togle === 1 ? "tab active" : "tab"}
            onClick={() => btnhandler(1)}
          >
            <div className="tabs__headings">
              Select <br /> Session
            </div>
          </div>
          <div className={togle === 2 ? "tab active" : "tab"}>
            <div className="tabs__headings">
              Select <br /> Seats
            </div>
          </div>
          <div
            className={togle === 3 ? "tab active" : "tab"}
            onClick={togle === 1 ? null : () => btnhandler(2)}
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
            <TabsectionOneCom
              onClick={() => btnhandler(2)} //passing the handler to move the screen ahead
            />
          </div>
          <div className={togle === 2 ? "content" : "content hidden"}>
            {/* cinema */}
            {/* importing a seprate section for Cinema */}

            <Cinema seats={seats} onClick={() => btnhandler(3)} />
          </div>
          <div className={togle === 3 ? "content" : "content hidden"}>
            <h2>Tabs Content Three</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
