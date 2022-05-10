import { render, screen } from "@testing-library/react";
import { BookList } from "./BookList";

describe("BookList", () => {
  it("loading", () => {
    const props = {
      loading: true,
    };

    render(<BookList {...props} />);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  it("error", () => {
    const props = {
      error: true,
    };

    render(<BookList {...props} />);

    expect(screen.getByText(/Error/)).toBeInTheDocument();
  });

  it("render books", () => {
    const props = {
      books: [
        { id: 1, name: "Refactoring" },
        { id: 2, name: "Domain-driven design" },
      ],
    };
    render(<BookList {...props} />);

    expect(screen.getByText(/Refactoring/)).toBeInTheDocument();
    expect(screen.getByText(/Domain-driven design/)).toBeInTheDocument();
  });
});
