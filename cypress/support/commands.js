// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("highlight",{prevSubject: "element"}, $el =>{
        $el.css('border','3px solid magenta')
});

Cypress.Commands.add('any', { prevSubject: 'element' }, (subject, size = 1) => {
        return cy.wrap(subject).then(elementList => {
      
          // this line enables me to use this command with either cy.get() or cy.wrap()
          elementList = (elementList.jquery) ? elementList.get() : elementList;
      
          elementList = Cypress._.sampleSize(elementList, size);
          elementList = (elementList.length > 1) ? elementList : elementList[0];
      
          return cy.wrap(elementList);
        });
      });
