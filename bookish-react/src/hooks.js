import axios from "axios";
import { useEffect, useState } from "react";

export function useRemoteService() {
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

  return { books, loading, error };
}
