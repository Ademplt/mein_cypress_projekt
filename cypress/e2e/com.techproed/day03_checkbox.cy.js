describe('checkboxes',()=>{
it.skip('checking single box',()=>{
    //it.skip testi run etmez
    //it.only sadece o testi calistirr
cy.visit('http://automationpractice.com/index.php')
cy.get('.sf-with-ul').first().click()


cy.get('#layered_category_4').should('not.be.checked')
//should('not.be.checked') -> element tikli degilse true return eder
//isaretlenmedigini test eder


//tikla
cy.get('#layered_category_4').check()

cy.get('#layered_category_4').should('be.checked')
//elementin tik li oldugunu test eder 


//tiklamayi kaldirir
cy.get('#layered_category_4').uncheck()
//uncheck() --> tiklamayi kaldirir




})
it.skip('all check boxes',()=>{
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.sf-with-ul').first().click()
// butun kutucuklara tiklar
    cy.get("input[type='checkbox']").check()
    cy.wait(3000)
//tiklamalari kaldir
    cy.get("input[type='checkbox']").uncheck()

})
it('click',()=>{
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.sf-with-ul').first().click()

    cy.get("input[type='checkbox']").click({multiple:true})
//-----wichtig-----
//click({multiple:true}) normalde click() tek element icin kullanilir.Birden fazla element icin basta ki kod kullanilir

//----Assert---
//1)
cy.get("input[type='checkbox']").should('be.checked')
//2)
cy.get("input[type='checkbox']").first().parent().should('have.class','checked')

//3)should('have.id','username')
//4)should('have.type','text')
//5)should('have.class','r-vbn-dlf')




})

})