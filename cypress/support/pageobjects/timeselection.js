/// <reference types = "Cypress"/>

export default class TimeSelection{

    constructor(){

    }

    checkScheduleNotEmpty(){
        cy.get('.option').find('.option-button').its('length').should('be.greaterThan',0);
    }

    selectRandomTimeSlot(index){
        cy.get('div.option > div.option-button').eq(index).click();
    }
}