import { Brakes } from "../../utils/app_constants"

export class CamaroPageItems {

    constructor() { }

    getCamaroTitleAndYear() {
        return cy.get('.shop_camaro .has_gen')
    }

    getSearchInput() {
        return cy.get('input[id="keywords"]')
    }

    getBrakes() {
        return cy.get('a[href="/2016-camaro-brakes.html"]')
        // .parent()
        //  cy.get('.nav_first_tier a')
        // .contains(Brakes)
    }

    getRotor() {
        return cy.get('a[href="/2016-camaro-rotors.html"]')
    }

    //Auto Loaded Modal
    getAutoLoadedModal() {
        return cy.get('div.overlay.marketing_modal')
    }
    getAutoLoadedModalClose() {
        return cy.get(".progress_container > .text_link")
    }

    //Filters
    getRotorDrumsFilter() {
        const selctor = 'a[href="/2016-camaro-rotors.html/f/?Subcategory=Brake Rotors and Drums"]'
        // cy.get(selctor)
        //     .find('span.count').invoke('text').as('RotorsCount')
        return cy.get(selctor)
    }

    getProductsList() {
        return cy.get('.products_container ul li')
    }

    getProductTotalsSpans() {
        return cy.get('p.total')
    }

    getMinPriceInputFilter() {
        return cy.get('.price_range input.min_price')
    }

    getMaxPriceInputFilter() {
        return cy.get('.price_range input.max_price')
    }

    getPriceFilterButton() {
        return cy.get('button.limit_price')
    }

    getChosenFilters() {
        return cy.get('div.chosen_facets')
    }

    getSortByList() {
        return cy.get('.sort_container select.sort')
    }

}