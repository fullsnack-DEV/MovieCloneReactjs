import { ADDTOFAV, REMOVEFROMFAV } from "./actiontypes";

export const Addtofav = (title, img, info) => {
  return {
    type: ADDTOFAV,
    payload: {
      title: "",
      img: "",
      info: "",
    },
  };
};

export const Removefromfav = (title, img, info) => {
  return {
    type: REMOVEFROMFAV,
    payload: {
      title: "",
      img: "",
      info: "",
    },
  };
};
