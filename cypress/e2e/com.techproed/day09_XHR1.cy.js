describe('XHR - XML, HTTP,REQUEST',()=>{
    //XHR java script ile sunulmus bir API dir. 
    //Web sitesini, es zamanli olarak arka planda calisan olaylari takip eder
    const requestUrl ="https://jsonplaceholder.cypress.io/comments"
    it('XHR Example 1',()=>{
  cy.request(requestUrl).should((response)=>{
    console.log(response)
    assert.equal(response.status,200)
    expect(response.statusText).to.eq('OK')
  })
    })

})