import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { combineReducers, legacy_createStore as createStore } from "redux";
import {
  amineListReducer,
  currentSearchAPIReducer,
  incrementPageReducer,
  errorReducer,
  loadReducer,
} from "./redux/reducers.js";
import { Provider } from "react-redux";

let rootReducer = combineReducers({
  animeList: amineListReducer,
  currentSearch: currentSearchAPIReducer,
  currPage: incrementPageReducer,
  error: errorReducer,
  loadCheck: loadReducer,
});

let store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
