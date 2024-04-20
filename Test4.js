/// <reference types="Cypress" />

describe('My Fourth Test Suite', function()
{
    it('My FourthTest Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        //Alert
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();

        //window alert event

        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })

        cy.wait(2000);
        //invoke : executing a method
        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.url().should('include','qaclickacademy')

        cy.go('back');

    })
})