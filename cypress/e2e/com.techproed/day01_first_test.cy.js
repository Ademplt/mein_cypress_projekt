describe('My First Test',()=>{
//describe('isim'),('test icin olusturulacak fonksiyonlar')
it('Url Testi',()=>{
    //test'i tanimliyoruz.@Test gibi
    //it('testin ismi','olusturulacak fonksiyonlar')


    //URL adresinde google var mi?
    cy.visit('https://www.google.com/')
    //visit('site adresi') siteye gider
    cy.url().should('include','google')
    //url() url testi icin kullanilir
    //should('iceriyor mu ','xxxxxxxx')
})
//2. Test olusturma
it('Title Testi',()=>{
    //Title google var mi?
    cy.visit('https://www.google.com/')
    cy.title().should('eq','Google')
    cy.get('#L2AGLb > .QS5gu').click()
})
})