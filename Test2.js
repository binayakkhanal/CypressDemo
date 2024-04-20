/// <reference types="Cypress" />

describe('My Second Test Suite', function()
{
    it('My SecondTest Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type('ca');
        cy.wait(2000);
       
        //Assertion
        cy.get(".product:visible").should('have.length',4); 

        //Parent Child Chaining
        cy.get(".products").find('.product').should('have.length',4);

        cy.get(".products").find(".product").each(($el, index, $list) => {
            
            const textVeg = $el.find('h4.product-name').text();
            if(textVeg.includes('Cashews')) {

                cy.wrap($el).find('button').click();
            }
          
          })
          cy.get('.cart-icon > img').click();
          cy.contains("PROCEED TO CHECKOUT").click();
          cy.contains("Place Order").click();


    })
})