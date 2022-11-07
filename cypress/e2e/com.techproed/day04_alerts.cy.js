describe('Alerts',()=>{
    it('alert test',()=>{
        //Cypress otomatik olarak alert button tiklamalarini onaylar
cy.visit('https://the-internet.herokuapp.co/javascript_alerts')
cy.get(':nth-child(1) > button').click()

cy.get('#result').should('have.text','You successfully clicked an alert ')




    })
    it.skip('accept alert Test',()=>{
        cy.visit('https://the-internet.herokuapp.co/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.get('#result').should('have.text','You clicked: Ok')
       
    })
    it('dismis alert',()=>{
        cy.visit('https://the-internet.herokuapp.co/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        
     //cypress otomatik olarak tamam butonuna tilladi
       //ama iptal butonunu secmek istiyoruz
       //browser controlu icin on() fonsiyounu kullanacagiz
       //on() ->jquery bir fonsiyondur

       //windows (object):confirm(functionality)
       cy.on('window:confirm',(str)=>{
        return false
        //return true ->default olarak tamam tikla demek
        //iptal e tiklamak istedigimiz de yukarda ki kodlari kullaniyoruz
       })
    })
    it('entering text on the alert',()=>{
        //3. button'a tikla (Click for js Promt)
        //Hi yaz. Ok 'a tikla
        cy.visit('https://the-internet.herokuapp.co/javascript_alerts')

        cy.window() //pop up pencereleri kontrol ediyoruz
        .then(($windowElement) =>{
         cy.stub($windowElement,'prompt').returns('Hi')
         cy.wait(4000)
         cy.get(':nth-child(3) > button').click()
        })
        cy.get('#result').should('have.text','You entered:Hi')
    })
})