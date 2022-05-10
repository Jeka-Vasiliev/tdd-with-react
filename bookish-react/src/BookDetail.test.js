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

    expect(screen.getByText(/Refactoring/)).toBeInTheDocument();
  });
});
