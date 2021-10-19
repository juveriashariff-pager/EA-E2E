Cypress.Commands.add('loginToEA', () => {
    cy.visit('https://hrz-qa-ea.pagerinc.com/' , {failOnStatusCode: false} );
    cy.get('#sign-in-btn').click();
    cy.get('#Email').type('robots@pager.com');
    cy.get('#next').click();
    cy.get('#password').type('dQH$14doRdEK');
    cy.get('#submit').click();

})


