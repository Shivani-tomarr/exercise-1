/// <reference types="cypress" />

describe('Login & new article', ()=>{

  Cypress.config('pageLoadTimeout',10000)

it('login' , ()=>{

  cy.visit("https://react-redux.realworld.io/#/login")
  cy.title().should('equal','Conduit')
  cy.location('protocol').should('equal', 'https:')
  cy.get('form').within(($form) =>{
    cy.get('input[type="email"]').type('shivani.tomar@zeuslearning.com')
    cy.get('input[type="password"]').type('Shivani12#')
    cy.root().submit()
    
  })
  cy.contains('Your Feed', {timeout:10000}).should('be.visible')
})
it('post', ()=>{
  cy.contains('New Post', {timeout:20000}).click()
  cy.hash().should('include', '#/editor')
  cy.get('ul.navbar-nav').children().contains('New Post').click()
  cy.get('form').within(($form)=>{
    cy.get('input').first().type('Test case600006#shivi')
    cy.get('input').eq(1).type('Test case run')
    cy.get('textarea').last().type("cypress")
    cy.contains('Publish Article').click()
  })
  cy.url().should('include','article')
})


it('mark & unmark as fav', ()=>{
  //cy.get('.nav-link').contains('Shivani12').click()
  cy.get('ul.navbar-nav').children().contains('Shivani12').click()
  cy.contains('My Articles', {timeout:10000}).should('be.visible')
  cy.get(".ion-heart").first().click()
  cy.contains('Favorited Articles').click()
  cy.url().should('include', 'favorites')
  cy.get(".ion-heart").first().click()
  cy.reload()
  //cy.contains('No articles are here... yet.').should('be.visible')
  cy.go(-1)
  

  
})


})
