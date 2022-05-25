import { render, screen } from "@testing-library/react";
import React from "react";

import { ReviewList } from "./ReviewList";

describe("ReviewList", () => {
  it("renders an empty list", () => {
    const props = {
      reviews: [],
    };
    render(<ReviewList {...props} />);

    const reviews = screen.getByTestId("reviews-container");

    expect(reviews).toBeInTheDocument();
  });
});
