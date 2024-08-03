describe('Health check test', () => {
    
})

it('Using Assertion', () => {
    cy.visit("/");
    cy.get('[id="rcc-confirm-button"]').click();
    cy.get('[href="/login"]').eq(1).click();
    cy.get('[id="email_field"]').type("dozies.service@gmail.com");
    cy.get('[id="password_field"]').type("PAssword@123");
    cy.get('[id="login_button"]').click();
   

   
    
    
    

  
})