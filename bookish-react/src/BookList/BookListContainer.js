import { BookList } from "./BookList";
import { useRemoteService } from "../hooks";
import { TextField } from "@material-ui/core";
import { useEffect, useState } from "react";

export function BookListContainer() {
  const { data, loading, error, setUrl } = useRemoteService("http://localhost:8080/books", []);
  const [term, setTerm] = useState("");

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`);
  }, [term, setUrl]);

  return (
    <>
      <TextField
        label="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        data-testid="search"
        role="search"
        margin="normal"
        variant="outlined"
      />
      <BookList books={data} loading={loading} error={error} />
    </>
  );
}
