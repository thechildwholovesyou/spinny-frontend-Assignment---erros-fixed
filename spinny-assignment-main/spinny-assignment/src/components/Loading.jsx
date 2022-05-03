import React from "react";
import { useSelector } from "react-redux";
import "../styles/Loading.css";

const Loading = () => {
  let error = useSelector((state) => state.error);
  let load = useSelector((state) => state.loadCheck);
  let query = useSelector((state) => state.currentSearch);
  return (
    <section className="loading">
      {error == true ? (
        <h1 className="loading-text">Oops! Something Went Wrong</h1>
      ) : query.length == 0 ? (
        <h1 className="loading-text">Search Your Favourite Animes</h1>
      ) : (
        <h1 className="loading-text">Loading</h1>
      )}
    </section>
  );
};

export default Loading;
