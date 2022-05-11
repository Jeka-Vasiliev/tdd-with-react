/// <reference types="cypress" />

import axios from "axios";

const gotoApp = () => {
  cy.visit("http://localhost:3000/");
};

const checkAppTitle = () => {
  cy.get('h2[data-test="heading"]').contains("Bookish");
};

const checkBookListWith = (expectation = []) => {
  cy.get('div[data-test="book-list"]').should("exist");
  cy.get("div.book-item").should((books) => {
    expect(books).to.have.length(expectation.length);

    const titles = [...books].map((b) => b.querySelector("h2").innerHTML);
    expect(titles).to.deep.equal(expectation);
  });
};

const checkBookList = () => {
  checkBookListWith(["Refactoring", "Domain-driven design", "Building Microservices"]);
};

const gotoNthBookInTheList = (bookNo) => {
  cy.get("div.book-item").contains("View Details").eq(bookNo).click();
};

const checkBookDetailWith = (url, title) => {
  cy.url().should("include", url);
  cy.get("h2.book-title").contains(title);
};

const checkBookDetail = () => {
  checkBookDetailWith("/books/1", "Refactoring");
};

const performSearch = (term) => {
  cy.get("[data-testid=search] input").type(term);
};

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
    gotoApp();
    checkAppTitle();
  });

  it("Shows a book list", () => {
    gotoApp();
    checkBookList();
  });

  it("Goes to the detail page", () => {
    gotoApp();
    gotoNthBookInTheList(0);
    checkBookDetail();
  });

  it("Searches for a title", () => {
    gotoApp();
    checkBookListWith(["Refactoring", "Domain-driven design", "Building Microservices"]);
    performSearch("design");
    checkBookListWith(["Domain-driven design"]);
  });
});
