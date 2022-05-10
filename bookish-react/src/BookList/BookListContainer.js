import { BookList } from "./BookList";
import { useRemoteService } from "../hooks";
import { useEffect, useState } from "react";
import { SearchField } from "./SearchField";

export function BookListContainer() {
  const { data, loading, error, setUrl } = useRemoteService("http://localhost:8080/books", []);
  const [term, setTerm] = useState("");

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`);
  }, [term, setUrl]);
  const onSearch = (e) => setTerm(e.target.value);

  return (
    <>
      <SearchField term={term} onSearch={onSearch} />
      <BookList books={data} loading={loading} error={error} />
    </>
  );
}
