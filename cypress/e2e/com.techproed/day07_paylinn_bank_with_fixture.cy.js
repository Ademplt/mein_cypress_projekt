/// <reference types="Cypress" />  
//yukarda ki kod iyilestirme yapiyor

describe('Paylinn bank',()=>{

    before(function(){
        cy.fixture('creds').then(function(data){
            this.data=data
        })
    })



    it('paylinn log in test',function(){
        //Url'e git
        cy.visit('https:/www.paylinn.com/')

        //sig in click
      cy.contains('Sign In').click()
    //username
      cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .type(this.data.username)

      //username girildigini dogrula
      cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .should('have.attr','value',this.data.username)



      cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .type(this.data.password)
      //password girildigini dogrula
      cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .should('have.attr','value',this.data.password) 
      //sign in click
      cy.get('.MuiButton-label').click()

      //giris yapildigini onayla
      cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text','Welcome')
      
     //giris yapildigini assert etme

     cy.get('.header__nav') //toplu locate yapildi ve coklu assert yapildi
     .should('contain.text','Wellcome')
     .and('contain.text','React')
     .and('contain.text','Logout')

      
    })
})