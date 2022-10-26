import 'cypress-iframe'
//cypress runner'in iframe ile iletisime gecmesi icin gerekli olan kodlari tanimlar
describe('iframes',()=>{
    it('iframe Test',()=>{
cy.visit('the-internet.herokuapp.com/iframe')

cy.get('h3').should('contain','Editor')
cy.frameLoaded('#mce_0_ifr') //iframe icin frameLoaded kullanilir
//dirver.swichto.frame('.mce_0_ifr') -->selenium
cy.iframe().find('p').clear()
//iframe'e git -- find('p') p tagini bul ve temizle
cy.iframe().find('p').type('Adem')

cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium')
    })
})