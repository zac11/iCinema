/// <reference types = "Cypress"/>

export default class Tickets{

    constructor(){

    }

    setTicketCount(index){
        cy.get('div.tickets-info > div:nth-child(1) > span > b').click({force:true});
    }
}