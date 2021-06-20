import { ADDTOFAV, REMOVEFROMFAV } from "./actiontypes";

export const Addtofav = (title, img, info, id, ratings) => {
  return {
    type: "ADDTOFAV",
    payload: {
      title: title,
      img: img,
      info: info,
      id: id,
      ratings: ratings,
    },
  };
};

export const Removefromfav = (title, img, info) => {
  return {
    type: "REMOVEFROMFAV",
    payload: {
      title: "",
      img: "",
      info: "",
    },
  };
};
