describe('Paylinn bank',()=>{
    it('paylinn log in test',()=>{
        //Url'e git
        cy.visit('https:/www.paylinn.com/')

        //sig in click
      cy.contains('Sign In').click()
    //username
      cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('User')
      cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('user')
      //sign in click
      cy.get('.MuiButton-label').click()

      //giris yapildigini onayla
      cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text','Welcome')
      

      
    })
})