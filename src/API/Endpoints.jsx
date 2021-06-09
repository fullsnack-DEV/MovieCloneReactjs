import Fetchapi from "./ApiClient";

//API keys
const API_KEYS = process.env.API_KEY;

//creating a endpoints

//getmovies

const getmovies = () =>
  Fetchapi("movie").get(
    "/popular?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1"
  );

//getupcoming

const getupcoming = () =>
  Fetchapi("tv").get("/popular?api_key=${API_kEYS}&language=en-US&page=1");

export { getmovies, getupcoming };
