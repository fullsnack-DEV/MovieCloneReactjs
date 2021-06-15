import React from "react";

export const TabsectionOneCom = () => {
  const dates = [
    { date: 22, month: "jan" },
    { date: 22, month: "jan" },
    { date: 22, month: "jan" },
    { date: 22, month: "jan" },
  ];

  return (
    <div className="tabsection">
      {/* //creating a Date Slector */}
      <ul style={{ display: "flex", listStyle: "none" }}>
        {dates.map((date) => {
          return (
            <li>
              {date.date} {date.month}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
