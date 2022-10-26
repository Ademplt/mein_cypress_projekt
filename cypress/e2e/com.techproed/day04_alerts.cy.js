describe('Alerts',()=>{
    it('alert test',()=>{
cy.visit('https://the-internet.herokuapp.co/javascript_alerts')
cy.get(':nth-child(1) > button').click()

cy.get('#result').should('have.text','You successfully clicked an alert ')




    })
    it.skip('accept alerty Test',()=>{
        cy.visit('https://the-internet.herokuapp.co/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.get('#result').should('have.text','You clicked: Ok')

    })
    it('dismis alert',()=>{
        cy.visit('https://the-internet.herokuapp.co/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        

    })
})