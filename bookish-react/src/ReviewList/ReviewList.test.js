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

  it("renders a list when data is passed", () => {
    const props = {
      reviews: [
        { name: "Juntao", date: "2018/06/21", content: "Excellent work, really impressed by your efforts" },
        { name: "Abruzzi", date: "2018/06/22", content: "What a great book" },
      ],
    };
    render(<ReviewList {...props} />);

    const reviews = screen.getAllByTestId("review");

    expect(reviews.length).toBe(2);
    expect(reviews[0].innerHTML).toBe("Juntao");
    expect(reviews[1].innerHTML).toBe("Abruzzi");
  });
});
