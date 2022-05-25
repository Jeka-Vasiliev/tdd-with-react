import { createSelector } from "reselect";

export const bookListSelector = createSelector(
  [(state) => state.books, (state) => state.loading, (state) => state.error],
  (books, loading, error) => ({ books, loading, error }),
);

export const termSelector = (state) => state.term;

export const detailSelector = (state) => state.detail;
