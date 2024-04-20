/// <reference types="Cypress" />

describe('My Sixth Test Suite', function()
{
    it('My SixthTest Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click(); //cy.contains('Top').click({force: true});
        cy.url().should('include','top');
    })
})