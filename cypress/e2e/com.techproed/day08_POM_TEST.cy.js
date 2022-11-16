import HomePage from '../PageObjectRepository/HomePage.cy'
import LoginPAge from '../PageObjectRepository/LoginPage.cy'



describe('Paylinn bank',()=>{

    before(function(){
        cy.fixture('creds').then(function(data){
            this.data=data
        })
    })

    it('paylinn log in test',function(){
      
        //Page Object olusturma
        const homePage=new HomePage()

        const loginPAge=new LoginPAge()


        //Url'e git
        cy.visit('https:/www.paylinn.com/')

        //sig in click
        homePage.getSigninLink().click()
      

    //username
    loginPAge.getUserNameBox().type(this.data.username)


    //username girildigini dogrula
    loginPAge.getUserNameBox().should('have.attr','value',this.data.username)

        
     //password gir
     loginPAge.getPasswordBox().type(this.data.password)
     
     
      //password girildigini dogrula
      loginPAge.getPasswordBox().should('have.attr','value',this.data.password)
      
      //sign in click
      loginPAge.getLoginButton().click()
     

      //giris yapildigini onayla
      loginPAge.getWellComeText().should('contain.text','Welcome')
      
      
     //giris yapildigini assert etme
     loginPAge.getNavBarHeader()
     .should('contain.text','Wellcome')
     .and('contain.text','React')
     .and('contain.text','Logout')

      
    })
})