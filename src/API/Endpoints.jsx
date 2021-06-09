import Fetchapi from "./ApiClient";

//API keys
const API_KEYS = process.env.API_KEY;

//creating a endpoints

//getmovies

const getmovies = () =>
  Fetchapi("movie").get(
    `/popular?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1`
  );

//getpopular

const getnowplaying = () =>
  Fetchapi("movie").get(
    `/now_playing?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1`
  );

//getupcoming
const getupcoming = () =>
  Fetchapi("movie").get(
    `/upcoming?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1`
  );

//get on_the_air
const Ontheair = () =>
  Fetchapi("tv").get(
    `/on_the_air?api_key=6210c279cdb193474eab3c90fade739b&language=en-US&page=1`
  );

export { getmovies, getnowplaying, getupcoming, Ontheair };
