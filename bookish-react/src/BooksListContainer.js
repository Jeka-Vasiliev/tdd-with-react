import { BooksList } from "./BooksList";
import { useRemoteService } from "./hooks";

export function BooksListContainer() {
  const { data, loading, error } = useRemoteService("http://localhost:8080/books", []);

  return <BooksList books={data} loading={loading} error={error} />;
}
