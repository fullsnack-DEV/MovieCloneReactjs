//intialstate

const IntialState = {
  fav: [],
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
        },
      ],
    };
  } else {
    return state;
  }
};
