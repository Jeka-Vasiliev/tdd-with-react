import axios from "axios";
import * as actions from "./redux/actions/actions";
import store from "./store";

describe("Store", () => {
  const books = [{ id: 1, name: "Refactoring" }];
  it("Fetch books from remote", async () => {
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: books }));

    await store.dispatch(actions.fetchBooks());

    const state = store.getState();
    expect(state.books.length).toEqual(1);
    expect(state.books).toEqual(books);
  });

  it("Performs a search", async () => {
    axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: books }));
    store.dispatch(actions.setSearchTerm("domain"));

    await store.dispatch(actions.fetchBooks());

    const state = store.getState();
    expect(state.term).toEqual("domain");
    expect(axios.get).toHaveBeenCalledWith("http://localhost:8080/books?q=domain");
  });
});
