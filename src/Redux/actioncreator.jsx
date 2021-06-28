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

export const getdates = (date = null, day = null, time = null) => {
  return {
    type: "GETDATE",
    payload: {
      date: date,
      day: day,
      time: time,
    },
  };
};

export const gettime = (time = null) => {
  return {
    type: "GETTIME",
    payload: {
      time: time,
    },
  };
};

export const getprice = (price = null) => {
  return {
    type: "GETPRICE",
    payload: {
      price: price,
    },
  };
};
export const getticket = (date, day, time, price) => {
  return {
    type: "GETPRICE",
    payload: {
      date: date,
      day: day,
      time: time,
      price: price,
    },
  };
};
