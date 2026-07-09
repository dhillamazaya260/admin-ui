// SOAL 7 - End to End Test
// Skenario: User mengakses halaman dashboard (overview).
//
// Alur:
// 1. User membuka aplikasi dalam kondisi belum login -> diarahkan ke /login.
// 2. User login dengan akun mahasiswa (lihat cypress/fixtures/user.json).
// 3. User berhasil masuk dan mendarat di halaman dashboard (overview, "/").
// 4. Seluruh elemen utama dashboard (header, sidebar, dan card-card ringkasan
//    keuangan) tampil dengan benar.
// 5. User logout dari dashboard dan kembali ke halaman login.

describe("User accesses the dashboard (overview) page", () => {
  it("TC-01: should redirect an unauthenticated user from '/' to '/login'", () => {
    cy.viewport(1280, 800);
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");
  });

  it("TC-02: should log in with a valid student account and land on the overview dashboard", () => {
    cy.viewport(1280, 800);

    cy.login();

    // Redirect ke dashboard (root path) setelah login berhasil
    cy.url().should("eq", "http://localhost:5173/");
  });

  it("TC-03: should display the header with the logged-in user's name and current date", () => {
    cy.viewport(1280, 800);
    cy.login();

    cy.get(".font-bold.text-2xl.me-6").should("be.visible").and("not.be.empty");
    cy.contains("May 19, 2023").should("be.visible");
  });

  it("TC-04: should display the search input and notification icon in the header", () => {
    cy.viewport(1280, 800);
    cy.login();

    cy.get("input").first().should("be.visible");
    cy.get("svg.text-primary.scale-110").should("be.visible");
  });

  it("TC-05: should display the sidebar with app logo and navigation menu", () => {
    cy.viewport(1280, 800);
    cy.login();

    cy.contains("FINEbank.IO").should("be.visible");

    cy.get("nav").should("be.visible");
    cy.get("nav").contains("Overview").should("be.visible");
    cy.get("nav").contains("Balances").should("be.visible");
    cy.get("nav").contains("Transaction").should("be.visible");
    cy.get("nav").contains("Bills").should("be.visible");
    cy.get("nav").contains("Expenses").should("be.visible");
    cy.get("nav").contains("Goals").should("be.visible");
    cy.get("nav").contains("Settings").should("be.visible");

    // Menu "Overview" berstatus aktif karena user berada di halaman dashboard
    cy.get("nav")
      .contains("Overview")
      .closest("a")
      .should("have.class", "bg-primary");
  });

  it("TC-06: should display the theme switcher and logout button in the sidebar", () => {
    cy.viewport(1280, 800);
    cy.login();

    cy.contains("Themes").should("be.visible");
    cy.contains("Logout").should("be.visible");
  });

  it("TC-07: should display the Total Balance card", () => {
    cy.viewport(1280, 800);
    cy.login();

    cy.contains("Total Balance").should("be.visible");
    cy.contains("All account").should("be.visible");
  });

  it("TC-08: should display the Goals card", () => {
    cy.viewport(1280, 800);
    cy.login();

    cy.contains("Goals").should("be.visible");
  });

  it("TC-09: should display the Upcoming Bill card", () => {
    cy.viewport(1280, 800);
    cy.login();

    cy.contains("Upcoming Bill").should("be.visible");
  });

  it("TC-10: should display the Recent Transactions card with transaction items", () => {
    cy.viewport(1280, 800);
    cy.login();

    cy.contains("Recent Transactions").should("be.visible");
    cy.contains("GTR 5").should("be.visible");
    cy.contains("Taxi Fare").should("be.visible");
  });

  it("TC-11: should display the Statistics card with the weekly comparison chart", () => {
    cy.viewport(1280, 800);
    cy.login();

    cy.contains("Statistics").should("be.visible");
    cy.contains("Weekly Comparison").should("be.visible");
  });

  it("TC-12: should display the Expenses Breakdown card with each expense category", () => {
    cy.viewport(1280, 800);
    cy.login();

    cy.contains("Expenses Breakdown").should("be.visible");
    cy.contains("Housing").should("be.visible");
    cy.contains("Food").should("be.visible");
    cy.contains("Transportation").should("be.visible");
    cy.contains("Entertainment").should("be.visible");
    cy.contains("Shopping").should("be.visible");
    cy.contains("Others").should("be.visible");
  });

  it("TC-13: should log out and redirect back to the login page", () => {
    cy.viewport(1280, 800);
    cy.login();

    cy.contains("Logout").click();

    // Backdrop + CircularProgress ("Logging Out") tampil selama proses logout
    cy.contains("Logging Out").should("be.visible");

    // Setelah logout selesai, user diarahkan kembali ke halaman login
    cy.url().should("include", "/login");
  });
});
