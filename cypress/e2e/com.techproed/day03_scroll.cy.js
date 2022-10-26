describe('scroll',()=>{
    it('scroll into view',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.wait(3000)
        cy.get('.col-md-7 > .mb-4').scrollIntoView()

        cy.get('.col-md-7 > h2 > span').scrollIntoView()
        cy.scrollTo('botton')
        //en asagiya git
        cy.wait(3000)
        cy.scrollTo('top')
        //en yukariya git
        cy.wait(3000)

        cy.scrollTo(0,1000) //1000 px down

        cy.scrollTo(0,-500) //500px up
        




    })
})