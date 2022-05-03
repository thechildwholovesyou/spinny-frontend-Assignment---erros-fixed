// Action for Updating Animes

export const updateAnimes = (v) => {
  return {
    type: "UPDATE",
    payload: v,
  };
};

// Action for Handeling Search

export const currentSearch = (v) => {
  return {
    type: "CURRENT_SEARCH",
    payload: v,
  };
};

// Action for new Searches

export const newAnimes = (v) => {
  return {
    type: "NEW_ANIMES",
    payload: v,
  };
};

// Action for Increment Page Action

export const incrementPageNumberAction = (v) => {
  return {
    type: "INCREMENT_PAGE_NO",
    payload: v,
  };
};

// Action for Error Handling

export const error = (v) => {
  return {
    type: "ERROR",
    payload: v,
  };
};

// Action for Loading Status

export const loadCheck = (v) => {
  return {
    type: "LOAD",
    payload: v,
  };
};


export const resetPageNumber = (v)=>{
  return{
    type: "RESET_PAGES"
  }
}