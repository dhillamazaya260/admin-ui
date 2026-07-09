// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command: login lewat halaman /login menggunakan form UI yang asli.
// Kredensial diambil dari cypress/fixtures/user.json supaya mudah diganti
// tanpa mengubah file test.
Cypress.Commands.add("login", () => {
  cy.fixture("user").then(({ email, password }) => {
    cy.visit("http://localhost:5173/login");

    cy.get("input#email").should("be.visible").type(email);
    cy.get("input#password").should("be.visible").type(password);

    cy.get("button").contains("Login").click();
  });
});