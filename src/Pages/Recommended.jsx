import { getupcoming, getnowplaying } from "../API/Endpoints";
import { MovieCom } from "../component/moviecard";

export const Recommended = () => {
  return (
    <>
      <h2 className="fav__heading">Recommended for you</h2>
      <div>
        <MovieCom endpoint={getupcoming} title={"Top Action Picks for You!"} />
        <MovieCom
          endpoint={getnowplaying}
          title={"Top Adventure Picks for You!"}
        />
      </div>
    </>
  );
};
