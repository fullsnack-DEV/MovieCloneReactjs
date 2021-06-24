import React from "react";
import { useCallback, useState } from "react";

//building a custom Hook

const useApi = (apifunc, id) => {
  //state var for data
  const [data, Setdata] = useState([]);

  //state var for error
  const [error, Seterror] = useState();
  //state var for loading
  const [loading, Setloading] = useState(false);

  //fucntion that will fetch the data

  const request = useCallback(async () => {
    //set loading to true

    Setloading(true);

    //get the data
    const response = await apifunc(id);

    //set loading false
    Setloading(false);
    console.log("I am from hook");

    if (!response) return Seterror(true);

    //if everything is good then we can Set the data

    Setdata(response.data.results || response.data);
  }, [apifunc, id]);

  return { error, data, loading, request };
};

export default useApi;
