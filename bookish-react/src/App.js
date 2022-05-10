import Typography from "@material-ui/core/Typography";
import { Route, Routes } from "react-router-dom";

import { BooksDetailContainer } from "./BookDetail/BooksDetailContainer";
import { BookListContainer } from "./BookList/BookListContainer";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes>
        <Route index element={<BookListContainer />} />
        <Route path="/books/:id" element={<BooksDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
