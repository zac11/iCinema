/// <reference types = "Cypress"/>

import LandingPage from "../../support/pageobjects/landing";

const landing  = new LandingPage();
describe('Landing on the Dashboard',()=>{
    it('goes to dashboard',()=>{
        landing.visitHomePage()
    });


    it('verifies user is on landing page',()=>{
        landing.verifyHomePageNavigation();
    });
})