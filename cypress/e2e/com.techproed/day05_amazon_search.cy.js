describe('search',()=>{
    it('amazon search',()=>{
       cy.amazonSearch('imac')
       //cy.amazonSearch('iphone')
       cy.get('.a-section > .a-color-state').should('have.text','"imac"')
       
    })
})