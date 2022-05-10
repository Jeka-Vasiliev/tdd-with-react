import { useParams } from "react-router-dom";
import { BookDetail } from "./BookDetail";

import { useRemoteService } from "../hooks";

export function BooksDetailContainer() {
  const { id } = useParams();
  const { data } = useRemoteService(`http://localhost:8080/books/${id}`, {});

  return <BookDetail book={data} />;
}
