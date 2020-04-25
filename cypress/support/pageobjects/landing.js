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

    verifyTitle(){
        cy.log("Verifies title");
        return cy.title().should('eq','iCinema - buy tickets online');
    }

    verifyTitleWord(){
        cy.log('Verifies that title contains iCinema');
        return cy.title().should('include','iCinema');
    }


    verifyCountriesExists(){
        cy.log('verifies that there are countries appearing in the dashboard');
        return cy.get('.option-wrapper').find('button').its('length').should('be.greaterThan',0);
    }

    verifyNavBar(){
        return cy.get('.nav').find('a').its('length').should('be.greaterThan',0);
    }

    clickOncountry(){
        return cy.get('.option-wrapper').find('button:nth-child(1)').click();
    }

    checkElementSelected(){
        return cy.get('.option-wrapper').find('button:nth-child(1)').should('have.class','active');
    }

    clickNextArrow(){
        return cy.get('.arrowright').click();
    }

    goToselectMovie(){
        return cy.get('.nav > button:nth-child(2)').click();
    }

    checkURL(text){
        cy.url().should('contain',text)
    }
}