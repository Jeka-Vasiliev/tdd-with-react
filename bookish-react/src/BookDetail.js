export function BookDetail({ book }) {
  return (
    <div className="book-detail">
      <h2 className="book-title">{book.name}</h2>;<p className="book-description">{book.description}</p>
    </div>
  );
}
