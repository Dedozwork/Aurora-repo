/// <reference types="cypress" />



describe('Health check test', () => {
    
    })
  
    it('Validate that webpage is live and accessible', () => {
        cy.visit("/");
        cy.title().should("eq","AUTOMATION PANDA");
        cy.wait(4500);
        cy.url().should("contain","panda.com")
        
        
        

      
    })
  
    

  