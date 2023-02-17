describe('Tugas Costum Command', () => {

  before('Login', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.login()
  });

  it('Fill Form', () => {
    cy.paysaved()
    cy.newpayee()
    cy.purchase()
  });
})