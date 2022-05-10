import Typography from "@material-ui/core/Typography";
import { Route, Routes } from "react-router-dom";

import { BooksDetailsContainer } from "./BooksDetailsContainer";
import { BooksListContainer } from "./BooksListContainer";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes>
        <Route index element={<BooksListContainer />} />
        <Route path="/books/:id" element={<BooksDetailsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
