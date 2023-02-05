describe('My First Test', () => {
  it('Ordering a delivery from Dominos.', () => {
    cy.visit('https://www.dominos.com/en/restaurants')
    cy.get("#Delivery").click();
    cy.get("#Type").select("Apartment")
    cy.get("#label-LocationName").type("Bolsa Row Apartments")
    cy.get("#Street").type("15100 Brookhurst Street")
    cy.get("#UnitNumber").type("10")
    cy.get("#PostalCode").type("92683")
    // cy.get("#City").type("Westminster")
    // cy.get("#Region").select("CA")
    cy.get(".css-14js2j3").eq(0).click();
  })
})
