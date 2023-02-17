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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type('username')

    cy.get('#user_password').clear()
    cy.get('#user_password').type('password')

    cy.get('#user_remember_me').click()

    cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('paysaved', () => {
    cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
    cy.get('#sp_payee').select('apple')
    cy.get('#sp_account').select('3')
    cy.get('#sp_amount').clear('20')
    cy.get('#sp_amount').type('20')
    cy.get('#sp_date').click()
    cy.get(':nth-child(3) > :nth-child(3) > .ui-state-default').click();
    cy.get('#sp_description').clear('s')
    cy.get('#sp_description').type('saya beli ini')
    cy.get('#pay_saved_payees').click()
})

Cypress.Commands.add('newpayee', () => {
    cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
    cy.get('.ui-tabs-nav > :nth-child(2) > a').click()
    cy.get('#np_new_payee_name').clear('w')
    cy.get('#np_new_payee_name').type('wardatunnisa')
    cy.get('#np_new_payee_address').type('jalanjalanjalan')
    cy.get('#np_new_payee_account').clear()
    cy.get('#np_new_payee_account').type('warda')
    cy.get('#np_new_payee_details').clear()
    cy.get('#np_new_payee_details').type('belii')
    cy.get('#add_new_payee').click()
})

Cypress.Commands.add('purchase', () => {
    cy.get('#pay_bills_tab > a').click()
    cy.get('.ui-tabs-nav > :nth-child(3) > a').click()
    cy.get('.ui-tabs-nav > :nth-child(3) > a').should('have.text', 'Purchase Foreign Currency')
    cy.get('#pc_currency').select('SGD')
    cy.get('#pc_amount').clear('2')
    cy.get('#pc_amount').type('21')
    cy.get(':nth-child(3) > .controls > :nth-child(3)').click()
    cy.get('#pc_inDollars_true').check()
    cy.get('#pc_calculate_costs').click()
    cy.get('#purchase_cash').click()
})