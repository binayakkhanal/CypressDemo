/// <reference types="Cypress" />

describe('My Third Test Suite', function()
{
    it('My ThirdTest Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        //Checkbox
        //should is an assertion .and is following to it. 
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.wait(1000);
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1');
        cy.get('input[type="checkbox"]').check(['option2','option3']);
        cy.wait(1000);

        //Static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2');
        
        //Dynamic Dropdown
        cy.get('#autocomplete').clear().type('ind');
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if($e1.text()==="India") {
                cy.wrap($e1).click();  
            }
        })

        //autocomplete
        cy.get('#autocomplete').should('have.value','India');

        //visible invisible
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        //Radio-Button
        cy.get('[value="radio2"]').check().should('be.checked');



    })
})