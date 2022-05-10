import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useEffect, useState } from "react";

import { BooksList } from "./BooksList";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const result = await axios.get("http://localhost:8080/books");
      setBooks(result.data);
    };
    fetchBooks();
  }, []);

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
