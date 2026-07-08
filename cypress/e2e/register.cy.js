describe("Register Page - Content Verification", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit("http://localhost:5173/register");
  });

  it("TC-01: should navigate to /register and render the register page", () => {
    cy.url().should("include", "/register");
  });

  it("TC-02: should display the app logo", () => {
    cy.contains("FINEbank.IO").should("be.visible");
  });

  it("TC-03: should display the correct page title", () => {
    cy.get("h1").should("contain.text", "Create an account");
  });

  it("TC-04: should display Name field with correct label and placeholder", () => {
    cy.contains("label", "Name").should("be.visible");
    cy.get("input#name")
      .should("be.visible")
      .and("have.attr", "type", "text")
      .and("have.attr", "placeholder", "Kholifah Rana Almadina");
  });

  it("TC-05: should display Email Address field with correct label and placeholder", () => {
    cy.contains("label", "Email Address").should("be.visible");
    cy.get("input#email")
      .should("be.visible")
      .and("have.attr", "type", "email")
      .and("have.attr", "placeholder", "hello@example.com");
  });

  it("TC-06: should display Password field with correct label and placeholder", () => {
    cy.contains("label", "Password").should("be.visible");
    cy.get("input#password")
      .should("be.visible")
      .and("have.attr", "type", "password")
      .and("have.attr", "placeholder", "********");
  });

  it("TC-07: should display terms of service text and link", () => {
    cy.contains("By continuing, you agree to our").should("be.visible");
    cy.contains("a", "terms of service").should("be.visible");
  });

  it("TC-08: should display the Sign up submit button", () => {
    cy.get("button[type='submit']").should("be.visible").and("contain.text", "Sign up");
  });

  it("TC-09: should display the divider text 'or sign up with'", () => {
    cy.contains("or sign up with").should("be.visible");
  });

  it("TC-10: should display the 'Continue with Google' button", () => {
    cy.get("button[type='button']").should("be.visible").and("contain.text", "Continue with Google");
  });

  it("TC-11: should display footer link to the Sign In page", () => {
    cy.contains("Already have an account?").should("be.visible");
    cy.contains("a", "Sign in Here").should("be.visible").and("have.attr", "href", "/login");
  });
});

describe("Register Page - Input Behaviour", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit("http://localhost:5173/register");
  });

  it("TC-12: should accept and display typed value in Name field", () => {
    cy.get("input#name")
      .type("Kholifah Rana Almadina")
      .should("have.value", "Kholifah Rana Almadina");
  });

  it("TC-13: should accept and display typed value in Email Address field", () => {
    cy.get("input#email")
      .type("kholifah.rana@example.com")
      .should("have.value", "kholifah.rana@example.com");
  });

  it("TC-14: should mask typed value in Password field", () => {
    cy.get("input#password")
      .type("Password123!")
      .should("have.value", "Password123!")
      .and("have.attr", "type", "password");
  });

  it("TC-15: should allow filling the whole form with valid data", () => {
    cy.get("input#name").type("Kholifah Rana Almadina").should("have.value", "Kholifah Rana Almadina");
    cy.get("input#email").type("kholifah.rana@example.com").should("have.value", "kholifah.rana@example.com");
    cy.get("input#password").type("Password123!").should("have.value", "Password123!");
    cy.get("button[type='submit']").should("contain.text", "Sign up");
  });

  it("TC-16: should allow clearing and retyping a field", () => {
    cy.get("input#email")
      .type("wrong@example.com")
      .should("have.value", "wrong@example.com")
      .clear()
      .type("correct@example.com")
      .should("have.value", "correct@example.com");
  });

  it("TC-17: should navigate to /login when 'Sign in Here' link is clicked", () => {
    cy.contains("a", "Sign in Here").click();
    cy.url().should("include", "/login");
  });
});

/*
 * CATATAN HASIL TEMUAN (lihat Bab Temuan & Rekomendasi pada dokumen):
 * FormSignUp.jsx saat ini menggunakan <form action=""> polos tanpa
 * onSubmit handler, tanpa validasi Formik/Yup, dan tanpa pemanggilan
 * service registrasi. Skenario di atas hanya menguji konten dan
 * kemampuan input sesuai kondisi kode saat ini. TC-18 s.d. TC-20 di
 * bawah ini bersifat PENDING dan baru relevan setelah validasi serta
 * integrasi service registrasi diimplementasikan.
 */
describe("Register Page - Validation & Submission (Pending / Future Scope)", () => {
  it("TC-18 (pending): should show validation error when submitting empty form", () => {
    // Belum dapat diuji: FormSignUp.jsx belum memiliki validasi Yup/Formik.
  });

  it("TC-19 (pending): should show validation error for invalid email format", () => {
    // Belum dapat diuji: FormSignUp.jsx belum memiliki validasi Yup/Formik.
  });

  it("TC-20 (pending): should call registration service and redirect on successful submit", () => {
    // Belum dapat diuji: FormSignUp.jsx belum memanggil authService (registerService).
  });
});
