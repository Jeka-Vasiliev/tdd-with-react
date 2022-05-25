import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { BookDetailContainer } from "./BookDetailContainer";
import { renderWithProvider } from "../renderWithProvider";
import { screen } from "@testing-library/react";

describe("BookDetailContainer", () => {
  it("renders", async () => {
    const mock = new MockAdapter(axios);
    mock.onGet("http://localhost:8080/books/2").reply(200, {
      name: "Acceptance tests driven development with React",
      id: 2,
    });

    renderWithProvider(<BookDetailContainer />, { path: "/books/:id", initialEntries: [`/books/2`] });

    const book = await screen.findByText("Acceptance tests driven development with React", { selector: "h2" });
    expect(book).toBeInTheDocument();
  });
});
