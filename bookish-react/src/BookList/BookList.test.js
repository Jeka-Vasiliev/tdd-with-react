import { render, screen } from "@testing-library/react";
import { BookList } from "./BookList";
import { MemoryRouter } from "react-router-dom";

const renderWithRouter = (component) => {
  return render(component, { wrapper: MemoryRouter });
};

describe("BookList", () => {
  it("loading", () => {
    const props = {
      loading: true,
    };

    renderWithRouter(<BookList {...props} />);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  it("error", () => {
    const props = {
      error: true,
    };

    renderWithRouter(<BookList {...props} />);

    expect(screen.getByText(/Error/)).toBeInTheDocument();
  });

  it("render books", () => {
    const props = {
      books: [
        { id: 1, name: "Refactoring" },
        { id: 2, name: "Domain-driven design" },
      ],
    };
    renderWithRouter(<BookList {...props} />);

    expect(screen.getByText(/Refactoring/)).toBeInTheDocument();
    expect(screen.getByText(/Domain-driven design/)).toBeInTheDocument();
  });
});
