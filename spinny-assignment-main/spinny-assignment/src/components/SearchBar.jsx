import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../styles/Header.css";
import {
  updateAnimes,
  currentSearch,
  newAnimes,
  error,
  loadCheck,
  resetPageNumber,
} from "../redux/actions";
const SearchBar = () => {
  let [sval, setSval] = useState("");
  let dispatch = useDispatch();
  return (
    <form className="searchBar">
      <input
        type="text"
        placeholder="Search anime..."
        className="input"
        value={sval}
        onChange={(e) => {
          setSval(e.target.value);
        }}
      />
      <button
        type="button"
        class="btn btn-info"
        onClick={(e) => {
          e.preventDefault();
          dispatch(resetPageNumber());
          dispatch(error(false));
          dispatch(loadCheck(true));
          dispatch(currentSearch(sval));
          dispatch(newAnimes());

          setSval("");
        }}
      >
        Go..
      </button>
    </form>
  );
};

export default SearchBar;
