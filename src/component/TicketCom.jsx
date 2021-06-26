import React from "react";

export const TicketCom = ({ price, time, date, day }) => {
  return (
    <div className="ticket">
      <div className="ticket__container">
        <span className="ticket__topleft" />
        <span className="ticket__topright" />
        <span className="ticket__bottomleft" />
        <span className="ticket__bottomright" />
        <div className="ticket__dotted">
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
        </div>
        <div className="ticket__dotted ticket__dotted--2">
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
        </div>
        <div className="ticket__dotted ticket__dotted--3">
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
          <span className="ticket__dotted__small" />
        </div>
        <div className="ticket__min">30 MIN</div>
        <div className="ticket__price">
          <h1>
            <span className="ticket__price--span">$</span>
            {price * 120}
          </h1>
        </div>
        <div className="ticket__time">
          <h3>{time}</h3>
        </div>
        <div className="ticket__day">
          <h1>
            {date} {day}
          </h1>
        </div>
      </div>
    </div>
  );
};
