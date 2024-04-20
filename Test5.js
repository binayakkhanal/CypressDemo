/// <reference types="Cypress" />

describe('My Fifth Test Suite', function()
{
    it('My FifthTest Case', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if(text.includes("Python")) {

                // .then() : This is a Cypress command that sets up a callback function
                // to be executed once the previous command in the chain is
                // completed. In this case, the previous command is the 
                // .next() command.

                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){

                // This is an anonymous function (a function without a name)
                // that takes a single parameter named price. The element
                // parameter represents the result of the previous command
                // in the chain, which is the selected DOM element.

                    const priceText = price.text()
                    expect(priceText).to.equal('25');
                })

            }

        })

    })
})