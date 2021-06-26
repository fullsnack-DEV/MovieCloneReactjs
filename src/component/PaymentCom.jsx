import React from "react";
import { useSelector } from "react-redux";
export const PaymentCom = () => {
  //importing  aStore Data for Payments

  const paydata = useSelector((state) => state);

  console.log("This isthe paydata", paydata);

  return (
    <div className="pay">
      <div className="pay__container"></div>
    </div>
  );
};
