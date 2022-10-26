describe('Navigation',()=>{
it.skip('back,forward,refresh',()=>{
    //skip --> testi test blogunda calistirmaz ignore gibi
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    cy.wait(4000) // hard wait of cypress

    cy.contains('Log in').click()
    cy.wait(2000)
   // cy.go('back')
    //once ki sayfaya git
    cy.go(-1)
    cy.wait(2000)
    //bu da once ki sayfya git demek

    cy.go('forward')
    cy.wait(2000)
    cy.go(1)

    cy.reload()
//sayfayi yeniden yukler refresh



})

it('zincirleme navigation',()=>{
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    cy.contains('Log in')
    .click().go('back')
    .go('forward')
    .go('back')
    cy.pause() // test buraya grlince duruyor.tekrar devam ettirilebilir

    cy.reload(true)
    .contains('Log in')
    .should('be.visible')


})

})