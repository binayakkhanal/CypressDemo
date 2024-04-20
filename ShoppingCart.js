/// <reference types="Cypress" />

describe('Shopping Cart', function() {
    it('Shopping Cart', function() {
        // Visit the website
        cy.visit("https://rahulshettyacademy.com/client");

        // Fill in login details and submit
        cy.get('#userEmail').type('Ramthapa@gmail.com');
        cy.get('#userPassword').type('Asd@1234');
        cy.get('#login').click();

        // Iterate over each product
        cy.get("#products").each(($el, index, $list) => {
            // Log the index and list of products
            cy.log(`Product Index: ${index}`);
            cy.log(`Product List: ${$list}`);

            // Find the <div> containing the text 'ZARA COAT 3' and click "Add to Cart"
            cy.contains('div', 'ZARA COAT 3').parent().within(() => {
                cy.contains(' Add To Cart').click();
            });
            
            // Assertion: Ensure the product is added to cart only once
            cy.contains('div', 'ZARA COAT 3').parent().should('have.length', 1);
            
        });

        // Click on Cart and Checkout buttons
        cy.contains('button', 'Cart').click({force: true});
        cy.contains('button', 'Checkout').click({force: true});

        // Type 'nep' in the country input and select Nepal
        cy.get('[placeholder="Select Country"]').type('nep');
        cy.contains('span', 'Nepal').click();

        // Click on the checkout button
        cy.get('.btnn').click();
        
    });
});
