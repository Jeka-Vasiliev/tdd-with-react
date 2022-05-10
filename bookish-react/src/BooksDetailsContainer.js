import { useParams } from "react-router-dom";

import { useRemoteService } from "./hooks";

export function BooksDetailsContainer() {
  const { id } = useParams();
  const { data } = useRemoteService(`http://localhost:8080/books/${id}`, {});

  return <h2 className="book-title">{data.name}</h2>;
}
