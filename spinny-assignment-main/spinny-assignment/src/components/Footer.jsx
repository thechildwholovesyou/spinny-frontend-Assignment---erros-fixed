import React from "react";
import { useDispatch } from "react-redux";
import "../styles/Footer.css"
import {
  updateAnimes,
  currentSearch,
  incrementPageNumberAction,
} from "../redux/actions";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      class="btn btn-warning button_loadMore"
      onClick={() => {
        dispatch(incrementPageNumberAction());
      }}
    >
      Load More
    </button>
  );
};

export default Footer;
