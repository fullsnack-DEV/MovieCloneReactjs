import React from "react";
import Lottie from "react-lottie";
import animation from "../lottie.json";

//Extracting the lading animation into Own Component

export const LoadingCom = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={200} width={200} />
    </>
  );
};
