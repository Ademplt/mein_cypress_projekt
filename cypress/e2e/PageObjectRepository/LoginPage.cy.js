class LoginPAge{
    getUserNameBox(){
        return  cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            }
    getPasswordBox(){
                return cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            }
    getLoginButton(){
                return cy.get('.MuiButton-label')
            }
    getWellComeText(){
                return cy.get('.header__nav > :nth-child(1) > .header__lineOne')
            }
    getNavBarHeader(){
        return cy.get('.header__nav')
    }
}
export default LoginPAge