import { BooksList } from "./BooksList";
import { useRemoteService } from "./hooks";

export function BooksListContainer() {
  const { books, loading, error } = useRemoteService();

  return <BooksList books={books} loading={loading} error={error} />;
}
