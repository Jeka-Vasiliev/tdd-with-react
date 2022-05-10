export function BooksList({ books }) {
  return (
    <div data-test="book-list">
      {books.map((book) => (
        <div className="book-item">
          <h2>{book}</h2>
        </div>
      ))}
    </div>
  );
}
