describe("home page successfully loads", () => {
  it("home page successfully loads", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("credit card component renders with appropriate content and is fillable with input values dependent on the form validation constraints", () => {
  it("credit card component title renders", () => {
    cy.visit("http://localhost:3000")
      .get("h2")
      .contains("Please enter your credit card information:");
  });

  it("entering text in credit card number input field should not work, but inputting numbers should", () => {
    cy.visit("http://localhost:3000")
      .get(".cCNumber")
      .type("123string")
      .should("have.value", "123");
  });

  it("entering text in credit card holder input field should work, but inputting numbers should not", () => {
    cy.visit("http://localhost:3000")
      .get(".cCHolder")
      .type("123string")
      .should("have.value", "string");
  });

  it("entering text into CVV input field should not work", () => {
    cy.visit("http://localhost:3000")
      .get(".cCCVV")
      .type("str")
      .should("have.value", "");
  });
});

// I am aware that these tests are not extensively testing all the client-side form input value format validation constraints, or even all elements of the credit card component but decided that this was an appropriate level of detail of testing considering the time constraints of the project
