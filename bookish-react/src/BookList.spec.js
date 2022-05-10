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
});
