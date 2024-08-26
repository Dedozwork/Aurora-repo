/// <reference types="cypress" />



describe('Login test', () => {
    
    })
  
    it('Validate new customer', () => {
        cy.visit("/");
        cy.get('[id="user-name"]').type('xxxxxxxxx').clear();
        cy.get('[id="user-name"]').type("standard_user");
        cy.get('[id="password"]').type("secret_sauce");
        cy.get('[id="login-button"]').click()
        
        
        

      
    })
  
    

  