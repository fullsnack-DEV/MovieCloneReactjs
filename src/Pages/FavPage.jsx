import React from "react";
import { useSelector } from "react-redux";
import { DetailCom } from "../component/detailCom";

export const FavPage = () => {
  //pull out the data from the Store
  const Favriotes = useSelector((state) => state.fav);

  return (
    <div className="fav">
      {Favriotes[0] ? (
        <h2
          style={{
            textAlign: "center",
            fontSize: "4rem",
            marginTop: "2rem",
            fontFamily: "Dancing Script",
            "font-weight": 700,
          }}
        >
          Your Reminders
        </h2>
      ) : (
        <h2
          style={{
            textAlign: "center",
            fontSize: "4rem",
            marginTop: "2rem",
            fontFamily: "Dancing Script",
            "font-weight": 700,
          }}
        >
          No Reminders
        </h2>
      )}

      {React.Children.toArray(
        Favriotes.map((fav) => {
          return (
            <DetailCom
              img={fav.img}
              description={fav.info}
              ratings={fav.vote_average}
              title={fav.title}
              id={fav.id}
              ratings={fav.ratings / 2}
              btntitle={"Delete!"}
            />
          );
        })
      )}
    </div>
  );
};
