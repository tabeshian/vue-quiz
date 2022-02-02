// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("navigates to info page, when no game is running", () => {
    cy.visit("/");
    cy.get("a[data-test-id='info-link']").click();
    cy.contains("h3", "Tools");
  });

  it("doesn't navigate to info page, when game is running", () => {
    cy.visit("/");
    cy.get("button[data-test-id='start-button']").click();
    cy.get("a[data-test-id='info-link']").click();
    cy.location().should((loc) => {
      expect(loc.pathname).not.to.eq("/info");
    });
  });

  it("continues playing", () => {
    cy.get("button").first().click();
    cy.contains("span[data-test-id='current-round']", 2);
    cy.get("button").first().click();
    cy.contains("span[data-test-id='current-round']", 3);
    cy.get("button").first().click();
    cy.contains("p", "Trefferquote");
  });
});
