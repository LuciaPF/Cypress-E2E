

describe('Feedback form', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    })

    it('should load feedback form', () => {
        cy.get('form').should('be.visible')
    })

    it('should fill in feedback form', () => {
        cy.get('#name').type('name')
        cy.get('#email').type('email@email.com')
        cy.get('#subject').type('any subject')
        cy.get('#comment').type('any comment')
    })

    it('should submit feedback form', () => {
       cy.get('#comment').click()
    })

    it('should display feedback message', () => {
       cy.get('#feedback-title').contains('Feedback')
    })
})