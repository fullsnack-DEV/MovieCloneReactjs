import { useState } from "react";

//building a custom Hook

const useApi = (apifunc, id) => {
  //state var for data
  const [data, Setdata] = useState([]);

  //state var for error
  const [error, Seterror] = useState();
  //state var for loading
  const [loading, Setloading] = useState(false);

  //fucntion that will fetch the data

  const request = async () => {
    //set loading to true

    Setloading(true);

    //get the data
    const response = await apifunc(id);

    //set loading false
    Setloading(false);

    if (!response) return Seterror(true);

    console.log(`this is omg ${id}`);

    //if everything is good then we can Set the data

    Setdata(response.data.results || response.data);
  };

  return { error, data, loading, request };
};

export default useApi;
