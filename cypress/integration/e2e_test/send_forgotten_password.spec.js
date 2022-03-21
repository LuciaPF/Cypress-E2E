

describe('Send forgotten password', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

   it('Should click on sign in button', () => {
       cy.get('#signin_button').click()
   })

   it('should click on forgotten password', () => {
      cy.get('.offset3 > a').click()
   })

   it('Should fill in email form', () => {
      cy.get('#user_email').type('user@email.com')
   })

   it('should submit email form', () => {
       cy.contains('Send Password').click()
   })

})