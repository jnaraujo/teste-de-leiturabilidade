describe("Home", () => {
  it("passes", () => {
    cy.visit("localhost:3000");
    cy.get("h3.title").contains("Teste de Leitura");
  });
});
