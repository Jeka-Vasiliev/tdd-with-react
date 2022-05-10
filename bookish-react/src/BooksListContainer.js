import { BooksList } from "./BooksList";
import { useRemoteService } from "./hooks";

export function BooksListContainer() {
  const { books } = useRemoteService();

  return <BooksList books={books} />;
}
