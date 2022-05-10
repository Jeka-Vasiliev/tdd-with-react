import { BooksList } from "./BooksList";
import { useRemoteService } from "./hooks";

export function BooksListContainer() {
  const { books, loading, error } = useRemoteService("http://localhost:8080/books", []);

  return <BooksList books={books} loading={loading} error={error} />;
}
