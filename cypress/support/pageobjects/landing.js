/// <reference types = "Cypress"/>
export default class LandingPage{

    constructor(){

    }


    visitHomePage(){
        cy.log('Landing on the browser home page');
        return cy.visit('/');
    }

    verifyHomePageNavigation(){
        cy.location().should((loc)=>{
            expect(loc.href).to.contain('3000');
        })
        cy.log("Navigated to application home page")
    }
}