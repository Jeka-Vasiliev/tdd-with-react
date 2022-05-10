/// <reference types="cypress" />

import axios from "axios";

describe("Bookish application", () => {
  before(async () => {
    return axios.delete("http://localhost:8080/books?_cleanup=true").catch(() => {});
  });
  afterEach(() => {
    return axios.delete("http://localhost:8080/books?_cleanup=true").catch(() => {});
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
    cy.visit("http://localhost:3000");
    cy.get('h2[data-test="heading"]').contains("Bookish");
  });

  it("Shows a book list", () => {
    cy.visit("http://localhost:3000");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);

      const titles = [...books].map((b) => b.querySelector("h2").innerHTML);
      expect(titles).to.deep.equal(["Refactoring", "Domain-driven design", "Building Microservices"]);
    });
  });

  it("Goes to the detail page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("div.book-item").contains("View Details").eq(0).click();
    cy.url().should("include", "/books/1");
    cy.get('h2.book-title').contains('Refactoring');
  });
});
