import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../redux/actions/actions";
import * as selectors from "../redux/selector";
import { BookList } from "./BookList";
import { SearchField } from "./SearchField";

export function BookListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchBooks());
  }, [dispatch]);

  const onSearch = (event) => {
    dispatch(actions.setSearchTerm(event.target.value));
    dispatch(actions.fetchBooks());
  };
  const { books, loading, error } = useSelector(selectors.bookListSelector);
  const term = useSelector((state) => state.term);

  return (
    <>
      <SearchField term={term} onSearch={onSearch} />
      <BookList books={books || []} loading={loading} error={error} />
    </>
  );
}
