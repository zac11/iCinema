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

    getTotalTicketPrice(){
        cy.get('div.sum-field > label:nth-child(2)').should(($div)=>{
            const text = $div.text().split(' ')[0];
            expect(parseInt(text)).to.be.greaterThan(0);
            
        })
        
    }

    saveBtn(){
        cy.get('button#confirm-btn').click();
    }
}