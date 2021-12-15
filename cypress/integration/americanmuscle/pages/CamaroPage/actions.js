import { CamaroPageItems } from "./items";

export class CamaroPageActions {

    constructor() {
        this.items = new CamaroPageItems()
    }

    hoverBrakes() {
        this.items.getBrakes()
            // .next()
            // .next('.nav_second_tier')
            .siblings('div')
            .invoke('show')
        // .trigger('mouseover')
    }

    // cy.get('#menu').contains('Genre').next('.sub-menu').then($el => {
    //     cy.wrap($el).invoke('show')
    //     cy.wrap($el).contains('Family').click()
    // })

    clickRotor() {
        this.items.getRotor()
            .click({ force: true })
    }

    selectRotorDrumsFilter() {
        this.items.getRotorDrumsFilter()
            .click()
    }

    saveRotorDrumsFilterCount() {
        this.items.getRotorDrumsFilter()
            .find('span.count')
            .invoke('text')
            .as('RotorsCount')
    }

    fillMinPriceInput(value) {
        this.items.getMinPriceInputFilter()
            .type(value)
    }

    fillMaxPriceInput(value) {
        this.items.getMaxPriceInputFilter()
            .type(value)
    }

    clickPriceFilterButton() {
        this.items.getPriceFilterButton()
            .click()
    }

    selectCustomerRatingSortFilter() {
        this.items.getSortByList()
            .select('Customer Rating')
    }

}