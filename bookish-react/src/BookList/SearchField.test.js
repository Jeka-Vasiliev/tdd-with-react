import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchField } from "./SearchField";

describe("SearchField", () => {
  it("renders input", () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };

    render(<SearchField {...props} />);
    userEvent.type(screen.getByRole("textbox"), "domain");

    expect(props.onSearch).toBeCalled();
  });
});
