/// <reference types = "Cypress"/>

export default class Tickets{

    constructor(){

    }

    setTicketCount(index){
        const picked = Math.floor(Math.random() * 3) + 1;
        cy.log(picked);
        cy.get(`form#tickets-info > div:nth-child(${picked}) > span > input`).any(2).each(element => {
            cy.wrap(element).type(2, { force: true });
        });
    }
}