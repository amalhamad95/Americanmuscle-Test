import 'cypress-real-events/support'

//Custom Command to Save Site Cookies
Cypress.Commands.add('saveCookies', (count) => {
    // Save Cookies to prevent Login everytime
    Cypress.Cookies.defaults({
        preserve: (cookie) => {
            return true;
        }
    })
})

//Custom Command to Clear Site Data
Cypress.Commands.add('clearSiteData', (count) => {
    cy.clearCookies() // clear all cookies
    cy.clearLocalStorage()
})

//Custom Command to Check Current Page URL and Title 
Cypress.Commands.add('checkPageUrl', (url, title) => {
    cy.log('Check page url')
    cy.url().should('include', url)
    cy.log('Check page title')
    cy.get('h1[class$="header"]').contains(title)
})


//Custom Command to Check Top Nav Cart Count
Cypress.Commands.add('checkCartCount', (count) => {
    cy.get('.cart_trigger span.cart_count')
        .should('have.text', count)
})