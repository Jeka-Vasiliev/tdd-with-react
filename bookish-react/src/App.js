import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <div data-test="book-list">
        <div className="book-item">
          <h2>Refactoring</h2>
        </div>
        <div className="book-item">
          <h2>Domain-driven design</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
