/// <reference types="cypress" />
import axios from "axios";

import * as app from "./app";

describe("Bookish application", () => {
  before(async () => {
    await axios.delete("http://localhost:8080/books?_cleanup=true");
  });
  afterEach(async () => {
    await axios.delete("http://localhost:8080/books?_cleanup=true");
  });
  beforeEach(async () => {
    const books = [
      { id: 1, name: "Refactoring" },
      { id: 2, name: "Domain-driven design" },
      { id: 3, name: "Building Microservices" },
    ];
    for (const book of books) {
      await axios.post("http://localhost:8080/books", book, { headers: { "Content-Type": "application/json" } });
    }
  });

  it("Visit the bookish", () => {
    app.gotoApp();
    app.checkAppTitle();
  });

  it("Shows a book list", () => {
    app.gotoApp();
    app.checkBookList();
  });

  it("Goes to the detail page", () => {
    app.gotoApp();
    app.gotoNthBookInTheList(0);
    app.checkBookDetail();
  });

  it("Searches for a title", () => {
    app.gotoApp();
    app.checkBookListWith(["Refactoring", "Domain-driven design", "Building Microservices"]);
    app.performSearch("design");
    app.checkBookListWith(["Domain-driven design"]);
  });
});
