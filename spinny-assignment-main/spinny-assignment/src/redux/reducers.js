// Reducer for Anime lists which we got from our API

export const amineListReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE":
      return [...state, action.payload];
    case "NEW_ANIMES":
      return [];
    default:
      return state;
  }
};

// Reducer for Handling Search Inputs

export const currentSearchAPIReducer = (state = "", action) => {
  switch (action.type) {
    case "CURRENT_SEARCH":
      return action.payload;

    default:
      return state;
  }
};

// Reducer for Increment page Number

export const incrementPageReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT_PAGE_NO":
      return state + 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

//  Reducer for Error Handling

export const errorReducer = (state = false, action) => {
  switch (action.type) {
    case "ERROR":
      return action.payload;
    default:
      return state;
  }
};

// Reducer for Loading Status

export const loadReducer = (state = false, action) => {
  switch (action.type) {
    case "LOAD":
      return action.payload;
    default:
      return state;
  }
};
