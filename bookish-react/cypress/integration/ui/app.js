/// <reference types="cypress" />

export const gotoApp = () => {
  cy.visit("http://localhost:3000/");
};
export const checkAppTitle = () => {
  cy.get('h2[data-test="heading"]').contains("Bookish");
};
export const checkBookListWith = (expectation = []) => {
  cy.get('div[data-test="book-list"]').should("exist");
  cy.get("div.book-item").should((books) => {
    expect(books).to.have.length(expectation.length);

    const titles = [...books].map((b) => b.querySelector("h2").innerHTML);
    expect(titles).to.deep.equal(expectation);
  });
};
export const checkBookList = () => {
  checkBookListWith(["Refactoring", "Domain-driven design", "Building Microservices"]);
};
export const gotoNthBookInTheList = (bookNo) => {
  cy.get("div.book-item").contains("View Details").eq(bookNo).click();
};
const checkBookDetailWith = (url, title) => {
  cy.url().should("include", url);
  cy.get("h2.book-title").contains(title);
};
export const checkBookDetail = () => {
  checkBookDetailWith("/books/1", "Refactoring");
};
export const performSearch = (term) => {
  cy.get("[data-testid=search] input").type(term);
};
