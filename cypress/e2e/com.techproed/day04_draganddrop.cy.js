import '@4tw/cypress-drag-drop'
describe('drag and drop',()=>{
it.skip('double click',()=>{
    cy.visit('https://www.testandquiz.com/selenium/testing.html')
    cy.get('#dblClkBtn').dblclick()
    //cift tiklama
    //cy.get('#dblClkBtn').rightclick()
    //sag tiklama
cy.on('window:alert',(str)=>{
    //Assert
    //1)
    expect(str).to.equal('hi, javaTpoint Testing')

    //2)
    expect(str).to.eq('hi, javaTpoint Testing')
    //3)
    expect(str).to.contains('hi, javaTpoint Testing')

})
})
it('drag and drop',()=>{
    cy.visit('https://www.testandquiz.com/selenium/testing.html')
    cy.get('#sourceImage') //suruklenecek element
    .drag('#targetDiv') //suruklenecegi yer
})
})