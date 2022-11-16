describe('Crystal Key Hotel',()=>{
    it('Test1',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        //seleniumda get gibi
        //login
        cy.get('#navLogon> .nav-link').click()

        //2,yol
        cy.contains('Log in').click()

        //contains metni text olarak buluyor
      //username:'manager'
      //password:'Manager2!'
      cy.get('#UserName').type('Manager')
      //driver.findElement(BycssLocater('#UserName')).sendKeys('Manager')
      cy.get('#Password').type('Manager1!')
      cy.get('#btnSubmit').click()

    })
})