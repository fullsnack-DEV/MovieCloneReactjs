import { create } from "apisauce";

//fetching the data from the IMDB API

const Fetchapi = (extension) =>
  create({
    baseURL: `https://api.themoviedb.org/3/${extension}`,
  });

//here with the help of the extension prop we can make the
//request to the different Endpoints

//For Example

//https://api.themoviedb.org/3/tv
//https://api.themoviedb.org/3/Movies

export default Fetchapi;
