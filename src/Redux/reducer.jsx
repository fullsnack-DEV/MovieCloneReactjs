import { Addtofav, Removefromfav } from "./actioncreator";

//intialstate

const IntialState = {
  fav: [],
};

export const Favreducer = (state = IntialState, action) => {
  if (action.type === ADDTOFAV) {
    return {
      ...state,
      fav: [
        ...fav,
        {
          title: action.payload.title,
          img: action.payload.img,
          info: action.payload.info,
          id: action.payload.id,
        },
      ],
    };
  } else if (action.type === REMOVEFROMFAV) {
    return {
      ...state,
      fav: [...fav],
      
    };
  }
};
