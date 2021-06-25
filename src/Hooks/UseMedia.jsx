//creating a Custome Media Hook
import { useState, useEffect } from "react";

export const useMedia = (query, initialState = false) => {
  //setting the state in the state var
  //state will be true and false
  const [state, Setstate] = useState(initialState);
  //our Intial State Would either be True or false

  //Creating a Side Effect
  useEffect(() => {
    let mounting = true;

    const mql = window.matchMedia(query);

    // create a on change function so that we can pass it to eventlistener
    const onchange = () => {
      //if component did'nt mount then return

      if (!mounting) {
        return;
      }

      //if mounted then set the state

      Setstate(Boolean(mql.matches));
    };

    mql.addListener(onchange);
    Setstate(mql.matches);

    //cleanup the lisner

    return () => {
      mounting = false;
      mql.removeListener(onchange);
    };
  }, [query]);
  return state;
};
