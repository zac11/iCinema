/// <reference types = "Cypress"/>

export default class MovieSelection{

    constructor(){

    }

    checkMovieListNotEmpty(){
        cy.get('.list').find('.item').its('length').should('be.greaterThan',0);
    }

    checkAllMovie(){
        
        cy.get('div.list > div.item')
                        .each(function($el, index, $list){
                                    cy.wrap($el).click();
                        })
    }

    checkParticularMovieByIndex(index){
        cy.get('div.list > div.item').eq(index).click();
    }

    checkMovieImage(){
        cy.log(`This checks if the movie image is displayed`);
        //This fix is given by Cypress CTO Gleb Bahmutov. Reference https://stackoverflow.com/a/58641462/1728790
       
        cy.get('.list-details').find('img')
                        .should('be.visible')
                        .and(($img)=>{
                            expect($img[0].naturalWidth).to.be.greaterThan(0)
                        });
        
    }

}