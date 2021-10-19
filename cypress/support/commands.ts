import 'cypress-localstorage-commands';
import 'cypress-wait-until';
import Chainable = Cypress.Chainable;
type LSI = {
    key: string;
    value: string;
};
type LSDContainer = {
    lsd: LSI[];
}
// Cypress.Commands.add('loginWithEAAssociate', credentials => {
//     cy.login(credentials.username, credentials.password)
// });

// Cypress.Commands.add('login', (username, password) => {
//     const loginUrl = Cypress.env('app_url');
//     const socialLoginOptions = {
//         username;
//         password;
//         loginUrl;
//         headless:false
//     };

    //clears local storage prior to getting any new localstorage items

    