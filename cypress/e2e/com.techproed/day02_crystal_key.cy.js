describe('Crystal Key Hotel',()=>{
it('Test Case',()=>{
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    cy.contains('Log in').click()
    //Assertion
    //1.yol
    cy.url().should('include','Account/Logon')
//url 'xxxxxxx' iceriyot mu
    //2.yol
    cy.get('#navLogon > .nav-link').should('have.text','Log in')
    //locate edilen yerde ki metinde 'Log in ' yaziyor mu
    //3.yol
    cy.get('.row > .mb-4').should('be.visible')
    //Locate edilen yerde metin var mi veya gorunur mu

    //4.yol
    cy.title().should('eq','KoalaResortHotels - Log in')

    //5.yol
    cy.get('.row > .mb-4').should('include.text','Log in')
    //Locate edilen yerde 'Log in' text olarak var mi
    


})

})