describe('Viewports',()=>{
    it('iphone8',()=>{
        cy.visit('https://www.amazon.com/')
        cy.viewport('iphone-8')
        cy.screenshot()

    })
    it('imac',()=>{
        cy.visit('https://www.amazon.com/')
        cy.viewport('macbook-16') // boyut ayarlamak icin kullanilan komut
        cy.screenshot()

    })
    it('custom',()=>{
        cy.visit('https://www.amazon.com/')
        cy.viewport(2500,1500)
        cy.screenshot()

    })
})