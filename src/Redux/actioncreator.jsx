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

export const Removefromfav = (id) => {
  return {
    type: "REMOVEFROMFAV",
    payload: {
      id,
    },
  };
};

export const getdates = (date, day) => {
  return {
    type: "GETDATE",
    payload: {
      date: date,
      day: day,
    },
  };
};
