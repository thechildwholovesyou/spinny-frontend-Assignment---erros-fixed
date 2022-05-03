import React, { useEffect } from "react";

import "../styles/Anime.css";
import Anime from "./Anime";
import Footer from "./Footer";
import Loading from "./Loading";

import {
  updateAnimes,
  currentSearch,
  incrementPageNumberAction,
  error,
  loadCheck,
} from "../redux/actions";

import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AnimeList = () => {
  let animeList = useSelector((state) => state.animeList);
  let currSearch = useSelector((state) => state.currentSearch);
  let currPage = useSelector((state) => state.currPage);
  let load = useSelector((state) => state.loadCheck);
  let err = useSelector((state) => state.error);
  console.log(currPage);

  const fetchAnimes = async () => {
    if (currSearch == undefined || currSearch.length == 0) {
      toast("Please search Your favourite Animes");
      return;
    }
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${currSearch}&limit=16&page=${currPage}`
    ).catch((err) => {
      //console.log(err);
      dispatch(error(false));
      dispatch(loadCheck(false));
      toast.error(err);
      return;
    });
    const data = await response.json();
    console.log(data.results);

    if (!data.results) {
      if (data.status == 404) {
        dispatch(error(true));
        dispatch(loadCheck(false));
        toast.error(data.message);
      } else {
        dispatch(error(true));
        dispatch(loadCheck(false));
        toast.error("Oops some error occured ");
      }
      return;
    }

    dispatch(updateAnimes(data.results));
    dispatch(loadCheck(false));
  };

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCheck(true));
    fetchAnimes();
    //dispatch(loadCheck(false));
  }, [currSearch, currPage]);

  //console.log(animeList);

  console.log(currSearch);
  console.log(err);
  console.log(load);

  return (
    <div>
      {currSearch.length == 0 || err || load ? (
        <Loading />
      ) : (
        <>
          <section className="anime-container">
            {animeList.map((el) => {
              return el.map((e) => {
                console.log(e);
                return <Anime image_url={e.image_url} title={e.title} />;
              });
            })}
          </section>
          <Footer />
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AnimeList;
