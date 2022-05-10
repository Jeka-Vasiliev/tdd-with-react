import Typography from "@material-ui/core/Typography";

import { BooksListContainer } from "./BooksListContainer";
import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BooksDetailContainer = () => {
  console.log(`BooksDetailContainer rendered`);
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      console.log(`fetched with id= ${id}`);
      const response = await axios.get(`http://localhost:8080/books/${id}`);
      setBook(response.data);
    };
    fetchBook();
  }, [id]);

  return <h2 className="book-title">{book.name}</h2>;
};

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes>
        <Route path="/" element={<BooksListContainer />} />
        <Route path="/books/:id" element={<BooksDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
