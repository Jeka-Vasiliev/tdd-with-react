import Typography from "@material-ui/core/Typography";

const renderBooks = (books) => (
  <div data-test="book-list">
    {books.map((book) => (
      <div className="book-item">
        <h2>{book}</h2>
      </div>
    ))}
  </div>
);

function App() {
  const books = ["Refactoring", "Domain-driven design"];

  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      {renderBooks(books)}
    </div>
  );
}

export default App;
