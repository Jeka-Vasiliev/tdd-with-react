import { BookDetail } from "./BookDetail";
import { render, screen } from "@testing-library/react";

describe("BookDetail", () => {
  it("renders title", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
      },
    };

    render(<BookDetail {...props} />);

    expect(screen.getByRole("heading")).toHaveTextContent(props.book.name);
  });

  it("renders description", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
        description:
          "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.",
      },
    };

    render(<BookDetail {...props} />);

    expect(screen.getByTestId("description")).toHaveTextContent(props.book.description);
  });

  it("displays the book name when no description was given", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
      },
    };

    render(<BookDetail {...props} />);

    expect(screen.getByTestId("description")).toHaveTextContent(props.book.name);
  });
});
