import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { BookListContainer } from "./BookListContainer";
import { screen } from "@testing-library/react";
import { renderWithProvider } from "../renderWithProvider";

it("renders", async () => {
  const mock = new MockAdapter(axios);
  mock.onGet("http://localhost:8080/books?q=").reply(200, [
    { name: "Refactoring", id: 1 },
    { name: "Acceptance tests driven development with React", id: 2 },
  ]);

  renderWithProvider(<BookListContainer />);

  const book1 = await screen.findByText("Refactoring");
  const book2 = await screen.findByText("Acceptance tests driven development with React");
  expect(book1).toBeInTheDocument();
  expect(book2).toBeInTheDocument();
});

it("something went wrong", async () => {
  const mock = new MockAdapter(axios);
  mock.onGet("http://localhost:8080/books?q=").networkError();

  renderWithProvider(<BookListContainer />);

  const error = await screen.findByText("Error...");
  expect(error).toBeInTheDocument();
});
