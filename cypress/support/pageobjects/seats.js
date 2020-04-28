/// <reference types = "Cypress"/>

export default class Seats{


    constructor(){

    }

    checkAllSeatsUnSelected(){
       const $li = Cypress.$('.chairgrid .chairavailable');
       cy.wrap($li)
                .should('not.have.class','active');
    }

    clickAndAddChairs(){
        const picked = 2;
        cy.log(picked);
        for (let index = 1; index <= picked; index++) {
           cy.get(`div.chairgrid > div:nth-child(${index})`).click();
            
        }
    }
        
    
}