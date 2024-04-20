/// <reference types="Cypress" />

describe('My First Test Suite', function()
{
    it('My FirstTest Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type('ca');
        cy.wait(2000);
       
        //Assertion
        cy.get(".product:visible").should('have.length',4); 

        //Parent Child Chaining
        cy.get(".products").find('.product').should('have.length',4);

        //Gives array of Product
        cy.get(".products").find('.product').eq(2).contains('ADD TO CART').click();

        cy.get(".products").find(".product").each(($el, index, $list) => {
            
            const textVeg = $el.find('h4.product-name').text();
            if(textVeg.includes('Cashews')) {

                cy.wrap($el).find('button').click();
            }
          
          })

    })
})