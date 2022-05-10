export function BooksList({ books, loading, error }) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div data-test="book-list">
      {books.map((book) => (
        <div className="book-item">
          <h2>{book.name}</h2>
        </div>
      ))}
    </div>
  );
}
