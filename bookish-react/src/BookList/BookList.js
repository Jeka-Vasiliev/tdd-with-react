import { Link } from "react-router-dom";

export function BookList({ books, loading, error }) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div data-test="book-list">
      {books.map((book) => (
        <div className="book-item" key={book.id}>
          <h2>{book.name}</h2>
          <Link to={`/books/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
