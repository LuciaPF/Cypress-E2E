
describe('Tranfer Funds Verification Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.id 
            const password = user.pwd

             cy.get('#user_login').type(username)
             cy.get('#user_password').type(password)
             cy.get('#user_remember_me').click()
             cy.contains('Sign in').click()
             //cy.login(username, password)
             
           
        })
    })

    it('should fill transfer funds form', () => {
            cy.get('#transfer_funds_tab').click()
            cy.contains('Transfer Money & Make Payments').click()
            cy.get('#tf_fromAccountId').select('Savings(Avail. balance = $ 1000)')
            cy.get('#tf_toAccountId').select('Savings(Avail. balance = $ 1000)')
            cy.get('#tf_amount').type('2000')
            cy.get('#tf_description').type('anything')
            cy.get('#btn_submit').click()

    })

    it('should verify correct data', () => {
            cy.get('#tf_fromAccountId').should('have.value', 'Savings')
            cy.get('#tf_toAccountId').should('have.value', 'Savings')
            cy.get('#tf_amount').should('have.value', '2000')
            cy.get('#tf_description').should('have.value', 'anything')
            

    })
})
