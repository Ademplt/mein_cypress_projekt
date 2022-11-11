describe('hooks',()=>{
before(()=>{
    console.log('before method calisti')
})
beforeEach(()=>{
    console.log('beforeEach method calisti')
    cy.visit('https://qa-environment.koalaresorthotels.com/')
})
after(()=>{
    console.log('After method calisti')
})
afterEach(()=>{
    console.log('AfterEach calisti')
    cy.url().should('include','/Account/Logon')
})
    it('test 1',()=>{
        cy.contains('Log in').click()
        
    })
})