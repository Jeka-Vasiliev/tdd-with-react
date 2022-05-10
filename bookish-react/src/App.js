import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useEffect, useState } from "react";

import { BooksList } from "./BooksList";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);
      try {
        const result = await axios.get("http://localhost:8080/books");
        setBooks(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
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
