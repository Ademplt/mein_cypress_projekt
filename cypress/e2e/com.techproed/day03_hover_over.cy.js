describe('hover over',()=>{
it('move over',()=>{
cy.visit('https://www.amazon.com/')
cy.get('.icp-nav-link-inner > .navn-line-2 > .nav-icon').trigger('mouseover')
//trigger() -> mouse i hareket ettirir

//change country/region
cy.contains('Change country/region').click()
//select
cy.get('#icp-selected-country').select('Canada',{force: true})
//Bir dropdown elementi acmaya zorlamak icin kullaniriz

})
})