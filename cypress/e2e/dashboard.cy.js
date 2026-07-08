// Skenario: User login dengan akun yang valid, lalu mengakses halaman
// dashboard (overview) dan memastikan komponen-komponen utama dashboard tampil.

describe("User accesses dashboard (overview) page", () => {
  it("should log in and land on the overview dashboard with its cards visible", () => {
    cy.viewport(1280, 800);

    // Step 1: buka halaman login
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    // Step 2: isi form login dengan akun mahasiswa
    cy.get("input#email")
      .should("be.visible")
      .type("mahasiswa@example.com")
      .should("have.value", "mahasiswa@example.com");

    cy.get("input#password")
      .should("be.visible")
      .type("password123")
      .should("have.value", "password123");

    cy.get("button").contains("Login").click();

    // Step 3: user berhasil diarahkan ke halaman dashboard (overview, "/")
    cy.url().should("eq", "http://localhost:5173/");

    // Step 4: sidebar navigasi dan header dashboard tampil
    cy.get("nav").should("be.visible");
    cy.get("nav").contains("Overview").should("be.visible");

    // Step 5: card-card utama dashboard tampil
    cy.contains("Total Balance").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Recent Transactions").should("be.visible");
    cy.contains("Statistics").should("be.visible");
    cy.contains("Expenses Breakdown").should("be.visible");
  });
});
