const getDescriptionFor = (book) => {
  return book.description ? book.description : book.name;
};

export function BookDetail({ book }) {
  return (
    <article className="book-detail">
      <h2 className="book-title">{book.name}</h2>
      <p data-testid="description" className="book-description">
        {getDescriptionFor(book)}
      </p>
    </article>
  );
}
