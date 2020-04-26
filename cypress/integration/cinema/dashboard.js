/// <reference types = "Cypress"/>

import LandingPage from "../../support/pageobjects/landing";
import MovieSelection  from "../../support/pageobjects/movieselection";
import Timeselection from "../../support/pageobjects/timeselection";
import Tickets from "../../support/pageobjects/tickets";

const landing  = new LandingPage();
const moveselection = new MovieSelection();
const time = new Timeselection();
const tickets = new Tickets();
describe('Landing on the Dashboard',()=>{
    it('goes to dashboard',()=>{
        landing.visitHomePage()
    });

    it('verifies user is on landing page',()=>{
        landing.verifyHomePageNavigation();
    });

    it('verifies the title',()=>{
        landing.verifyTitle();
    });

    it('verifies the word iCinema in title',()=>{
        landing.verifyTitleWord();
    });

    it('checks whether there are countries appearing',()=>{
        landing.verifyCountriesExists();
    });

    it('checks that navbar is not empty',()=>{
        landing.verifyNavBar();
    });

    it('clicks on first country',()=>{
        landing.clickOncountry();
    });

    it('checks if country is selected',()=>{
        landing.checkElementSelected();
    });

    it('goes to next section',()=>{
        landing.clickNextArrow();
    });

    it('check URL contains text',()=>{
        landing.checkURL('movies');
    });

    it('checks that there are movies in the list',()=>{
        moveselection.checkMovieListNotEmpty()
    });

    it('maybe prints all names',()=>{
        moveselection.checkAllMovie()
    });

    it('clicks element by index',()=>{
        moveselection.checkParticularMovieByIndex(3);
    });

    it('checks if the image is present for the movies',()=>{
        moveselection.checkMovieImage();
    });

    it('clicks on next arrow',()=>{
        landing.clickNextArrow();
    });

    it('checks if the user is now on schedule page',()=>{
        landing.checkURL('schedule');
    });

    it('checks that the schedules are not empty',()=>{
        time.checkScheduleNotEmpty();
    });

    it('selects a time slot',()=>{
        time.selectRandomTimeSlot(2);
    });

    it('goes to next page',()=>{
        landing.clickNextArrow();
    });

    it('checks the person is on tickets page',()=>{
        landing.checkURL('tickets')
    })

    it('enter 3 tickes',()=>{
        //randomly enter tickets
        tickets.setTicketCount(3);
    });

    it('clicks on next arrow',()=>{
        landing.clickNextArrow();
    });

    it('checks the person is on seats page',()=>{
        landing.checkURL('seats');
    });

    it('')




})