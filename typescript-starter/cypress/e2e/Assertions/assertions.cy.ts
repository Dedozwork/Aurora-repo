describe('Health check test', () => {
    
})

it('Using Assertion', () => {
    cy.visit("/");
    cy.get('[id="rcc-confirm-button"]').click();
   // cy.get('[href="/course"]').eq(2).click();
    cy.get('[href="/course"]').should("have.class", "btn btn-danger");
    cy.get('[href="/course"]').should('not.contain.text', "Nigeria");


   
    
    
    

  
})
