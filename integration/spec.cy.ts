describe('My firt test',()=>{
  it('Visit the initial project page', ()=>{
    cy.visit('/')
    cy.contains('welcome')
    cy.contains('sandbox app is running')
  })
})