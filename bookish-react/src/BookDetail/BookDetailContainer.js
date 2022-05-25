import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { BookDetail } from "./BookDetail";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/actions";
import * as selectors from "../redux/selector";

export function BookDetailContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchBook(id));
  }, [dispatch, id]);

  const book = useSelector(selectors.detailSelector);

  return <BookDetail book={book || {}} />;
}
