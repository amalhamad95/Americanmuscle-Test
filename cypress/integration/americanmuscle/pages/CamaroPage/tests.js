import { camaro_2016_rotors_url, camaro_2016_url } from "../../utils/app_constants";
import { CamaroPageItems } from "./items";

export class CamaroPageTests {

    constructor() {
        this.items = new CamaroPageItems();
    }

    checkCamaroPageLoading() {
        cy.url().should('include', camaro_2016_url)
    }

    checkCamaroTitleAndYear() {
        this.items.getCamaroTitleAndYear()
            .should('contain', 'Camaro')
            .and('contain', '2016-2022')
    }

    checkSearchInput(placeholder) {
        this.items.getSearchInput()
            .should('have.attr', 'placeholder', placeholder)
    }

    checkCamaroRotorsPageLoading() {
        cy.checkPageUrl(camaro_2016_rotors_url, '2016-2022 Camaro Rotors')
    }

    //Auto Loaded Modal
    checkAutoLoadedModalVisible() {
        // this.items.getAutoLoadedModal()
        cy.get("body").then($body => {
            if ($body.find("div.overlay.marketing_modal").length > 0) {
                //evaluates as true if button exists at all
                this.items.getAutoLoadedModalClose()
                    .click({ force: true })
            } else {
                //you get here if the button DOESN'T EXIST
                assert.isOk('everything', 'everything is OK');
            }
        });
    }


    //Filters
    checkRotorDrumsSelected() {
        this.items.getRotorDrumsFilter()
            .should('have.class', 'selected')
    }

    checkProductsListCount(count) {
        this.items.getProductTotalsSpans()
            .then(function (totalsSpans) {
                for (let i = 0; i < totalsSpans.length; i++) {
                    totalsSpans[i].should('contain', count)
                }
            })
    }

    checkMinPriceFilterInputValue(value) {
        this.items.getMinPriceInputFilter()
            .should('have.value', value)
    }

    checkMaxPriceFilterInputValue(value) {
        this.items.getMaxPriceInputFilter()
            .should('have.value', value)
    }

    checkChosenFilters() {
        cy.fixture('filters')
            .then(function (filters) {
                for (let i = 0; i < filters.length; i++) {
                    let filter = filters[i];
                    // this.items.getChosenFilters()
                    cy.get('div.chosen_facets')
                        .contains('p:nth-child(' + (i + 1) + ')')
                        .should('have.att', 'data-group-id', filter.facet_id)
                        .should('contain', filter.group_id)
                }
            })
    }

    checkCustomerRatingSortSelected() {
        this.items.getSortByList()
            .find('option:selected')
            .should('have.text', 'Customer Rating')
    }

}