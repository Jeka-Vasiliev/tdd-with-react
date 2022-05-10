import { BookList } from "./BookList";
import { useRemoteService } from "../hooks";

export function BookListContainer() {
  const { data, loading, error } = useRemoteService("http://localhost:8080/books", []);

  return <BookList books={data} loading={loading} error={error} />;
}
