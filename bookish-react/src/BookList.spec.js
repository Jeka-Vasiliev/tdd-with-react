import { render } from "@testing-library/react";
import { BooksList } from "./BooksList";

describe("BookList", () => {
  it("loading", () => {
    const props = {
      loading: true,
    };

    const { container } = render(<BooksList {...props} />);
    const content = container.querySelector("p");

    expect(content.innerHTML).toContain("Loading");
  });

  it("error", () => {
    const props = {
      error: true,
    };

    const { container } = render(<BooksList {...props} />);
    const content = container.querySelector("p");

    expect(content.innerHTML).toContain("Error");
  });

  it("render books", () => {
    const props = {
      books: [
        { id: 1, name: "Refactoring" },
        { id: 2, name: "Domain-driven design" },
      ],
    };
    const { container } = render(<BooksList {...props} />);
    const titles = [...container.querySelectorAll("h2")].map((h) => h.innerHTML);

    expect(titles).toEqual(["Refactoring", "Domain-driven design"]);
  });
});
