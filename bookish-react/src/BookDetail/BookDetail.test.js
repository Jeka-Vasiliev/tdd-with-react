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

    expect(screen.getByText(props.book.name)).toBeInTheDocument();
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

    expect(screen.getByText(props.book.description)).toBeInTheDocument();
  });
});
