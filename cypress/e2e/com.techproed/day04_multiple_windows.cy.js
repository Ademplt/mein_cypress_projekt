describe('multiple windows',()=>{
it('removing target',()=>{
cy.visit('the-internet.herokuapp.com/windows')
cy.wait(3000)
cy.get('.example > a').invoke('removeAttr','target').click()
//invoke('removeAttr','AtributeName') // atribute ismini girerek siliyoruz ve 
//yeni sayfada degilde ayni sayfada aciyoruz windowu
//yani yeni sayfa acmasina sebep olan targeti siliyoruz

cy.get('h3').should('have.text','New Window')


})
//2.yol
it('yeni url de acma',()=>{
    cy.visit('the-internet.herokuapp.com/windows')
    cy.wait(3000)
    //prop() komutu ile 'href' degerini aldik
    //prop() --> jquery de bir method, atribute degeri alir
    cy.get('.example > a').
    then((element)=>{
       const newUrl= element.prop('href')

       cy.visit(newUrl)
    })
   cy.get('h3').should('have.text','New Window')

})
})