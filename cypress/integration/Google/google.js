import {Given,Then} from 'cypress-cucumber-preprocessor/steps'
// import GoogleSearchPage from './searchPage'

//const url = 'https://google.com'
const url = 'teste'
Given('I open Google page', () => {
  cy.visit(url)
})

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})
