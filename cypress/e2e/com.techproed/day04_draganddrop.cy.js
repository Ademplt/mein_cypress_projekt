import '@4tw/cypress-drag-drop'
describe('drag and drop',()=>{
it('drag and drop Test',()=>{
    cy.visit('https://www.testandquiz.com/selenium/testing.html')
    cy.get('#dblClkBtn').dblclick()
    //cift tiklama
    cy.get('#dblClkBtn').rightclick()
    //sag tiklama

})
})