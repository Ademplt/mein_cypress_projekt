describe('XHR - XML, HTTP,REQUEST',()=>{
    //XHR java script ile sunulmus bir API dir. 
    //Web sitesini, es zamanli olarak arka planda calisan olaylari takip eder
    const requestUrl ="https://jsonplaceholder.cypress.io/comments"
    it('XHR Example 2',()=>{
  cy.request('POST',requestUrl,{
    userId:501,
    title:"cypress cok kolay",
    body:"java script daha da kolay"
  }).then((response)=>{
console.log(response)
expect(response.status).to.eq(201)
expect(response).property('body').to.contain({title :'cypress cok kolay'})
expect(response.body).property('userId').to.be.a('number')
  })
     })
})