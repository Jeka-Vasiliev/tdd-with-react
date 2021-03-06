import * as types from "../types";

const reducer = (state = { books: [], loading: false, detail: {}, term: "" }, action) => {
  switch (action.type) {
    case types.FETCH_BOOKS_PENDING:
      return { ...state, loading: true };
    case types.FETCH_BOOKS_SUCCESS:
      return { ...state, books: action.books, loading: false };
    case types.FETCH_BOOKS_FAILED:
      return { ...state, loading: false, error: true };
    case types.FETCH_BOOK_SUCCESS:
      return { ...state, detail: action.detail };
    case types.SET_SEARCH_TERM:
      return { ...state, term: action.term };
    default:
      return state;
  }
};

export default reducer;
