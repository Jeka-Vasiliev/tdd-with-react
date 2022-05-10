import Typography from "@material-ui/core/Typography";

import { BooksList } from "./BooksList";

function App() {
  const books = ["Refactoring", "Domain-driven design"];

  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BooksList books={books} />
    </div>
  );
}

export default App;
