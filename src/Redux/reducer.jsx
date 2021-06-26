//intialstate

const IntialState = {
  fav: [],
  dates: [
    {
      date: null,
      day: null,
    },
  ],
  time: [
    {
      time: null,
    },
  ],
  price: [
    {
      price: null,
    },
  ],
};
console.log(IntialState);

export const Favreducer = (state = IntialState, action) => {
  console.log(state);
  if (action.type === "ADDTOFAV") {
    return {
      ...state,
      fav: [
        ...state.fav,
        {
          title: action.payload.title,
          img: action.payload.img,
          info: action.payload.info,
          id: action.payload.id,
          ratings: action.payload.ratings,
        },
      ],
    };
  } else if (action.type === "REMOVEFROMFAV") {
    return {
      ...state,
      fav: state.fav.filter((item) => item.id !== action.payload.id),
    };
  } else if (action.type === "GETDATE") {
    return {
      ...state,
      dates: [
        {
          date: action.payload.date,
          day: action.payload.day,
        },
      ],
    };
  } else if (action.type === "GETTIME") {
    return {
      ...state,
      time: [
        {
          time: action.payload.time,
        },
      ],
    };
  } else if (action.type === "GETPRICE") {
    return {
      ...state,
      price: [
        {
          price: action.payload.price, //n0 of seats
        },
      ],
    };
  } else {
    return state;
  }
};
