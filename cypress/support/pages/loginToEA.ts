Cypress.Commands.add('loginToEA', () => {
    cy.visit('https://hrz-stage-ea.pagerinc.com/' , {failOnStatusCode: false} );
    cy.get('.ant-select-selection-item').click();
    cy.xpath('/html/body/div[2]/div/div/div/div[2]/div[1]/div/div/div[2]/div').click();
    cy.wait(2000);
    cy.get('#sign-in-btn').click();
    cy.setCookie('auth_key', 'set-cookie: _xsrf=UWNNbVJUbGdrdVBxVzEwMUJVdlduR2tSaldld1JmOXU=|1625514810518508110|5147f0cc303a452f47d1c436c1706102d11d4a4a; Expires=Tue, 06 Jul 2021 07:53:30 UTC; Max-Age=43200; Path=/');
    cy.get('body > div.login-container > div > div > div > form > fieldset:nth-child(1) > div').click().type('juveria.shariff+axa@pager.com');
    var pass='Falak123*';
    cy.get(':nth-child(2) > .LoginTextField__inputContainer > .LoginTextField__loginInput').click().type(pass);
   // cy.wait(2000);
    cy.get('.LoginActionButton__button').click();


})


