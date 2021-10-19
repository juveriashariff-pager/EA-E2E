import { keys } from "cypress/types/lodash";
import { verify } from "cypress/types/sinon";
import { randomNumber, role, smallRandomNumber, team, user } from "../../constants/globalConstants"

//general data

const name_1 = 'EA';
const role_name = name_1+randomNumber;



 //create a role
Cypress.Commands.add('createARole', () => {
  
   //we are creating a super admin role

   cy.get('#roles-link').click();
   cy.get('#root > section > main > div > div > div > div > div.ant-table-title > header > div.cta-btns > a').click();
   const name = 'EA' +randomNumber
   cy.get('#name').type(role_name);
   cy.get('#displayName').type(role_name);
   cy.get('.ant-select-selection-item').type('{downarrow}');
   cy.xpath('/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div[1]/div').click();
   cy.get('#wipLimit').type(''+smallRandomNumber);
   cy.get('#description').type('test');
   cy.get('#isSupervisor > label:nth-child(1) > span.ant-radio > input').click();
   cy.get('#isClinical > :nth-child(1)').click();
   cy.get('#isRoutable > :nth-child(1) > :nth-child(2)').click();
   cy.get('#submit-create-btn').click().wait(2000);
   cy.get('#permissions-link').click();
   cy.get('[type="checkbox"]').click({ multiple: true, force: true });
   cy.wait(2000);
   cy.get('.ant-transfer-operation > :nth-child(1) > .anticon > svg').click();
   cy.get(':nth-child(3) > .ant-transfer-list-body > .ant-transfer-list-body-search-wrapper > .ant-input').type('Read Only').type('{enter}');
   cy.get('.ea-list-chckbx').contains('Read Only').click();
   cy.get('.ant-transfer-operation > :nth-child(2) > .anticon > svg').click();
   cy.get('#users-and-teams-link').click();
   cy.wait(1000);
   cy.get('#rc_select_3').type(user);
   cy.get('body > div:nth-child(9) > div > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div > div > div > p:nth-child(1)').click();

  cy.get('#rc_select_4').type(team);
  cy.get('body > div:nth-child(10) > div > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div > div').click();
  cy.get('#add-row-btn > span').click().wait(1000);
  cy.get('#submit-save-btn > span').click();
  
})
