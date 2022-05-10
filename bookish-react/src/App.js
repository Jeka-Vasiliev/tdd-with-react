import Typography from "@material-ui/core/Typography";

import { BooksListContainer } from "./BooksListContainer";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BooksListContainer />
    </div>
  );
}

export default App;
