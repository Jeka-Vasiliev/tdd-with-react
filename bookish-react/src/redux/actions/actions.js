import axios from "axios";
import * as types from "../types";

export const setSearchTerm = (term) => {
  return { type: types.SET_SEARCH_TERM, term };
};

export const fetchBooks = (term) => {
  return async (dispatch) => {
    dispatch({ type: types.FETCH_BOOKS_PENDING });

    try {
      const res = await axios.get(`http://localhost:8080/books?q=${term}`);

      dispatch({ type: types.FETCH_BOOKS_SUCCESS, books: res.data });
    } catch (error) {
      dispatch({ type: types.FETCH_BOOKS_FAILED, err: error.message });
    }
  };
};
