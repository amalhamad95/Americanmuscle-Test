import { camaro_2016_rotors_url, camaro_2016_url, maxPrice, minPrice } from "../../utils/app_constants";
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

    checkPageBreadcrumbs() {
        const breadcrumbsArr = ["Camaro Accessories & Parts", "Camaro Brakes", "Camaro Rotors", "2016-2022 Camaro Accessories & Parts", "2016-2022 Camaro Brakes", "2016-2022 Camaro Rotors"]
        this.items.getPageBreadcrumbs().then(breadItems => {
            for (let i = 0; i < breadItems.length; i++) {
                expect(breadItems[i]).to.contain(breadcrumbsArr[i])
            }
            // const items = ele.map((index, el) => Cypress.$(el).text().substr(1).trim().replace(/,/g, '')).get();
            // expect(breadcrumbsArr, 'Page Breadcrumbs').to.deep.equal(items);
        });
    }

    checkPageBreadcrumbSelectedItem(value) {
        this.items.getPageBreadcrumbs()
            .children()
            .not('.text_link')
            .should('contain', value)
    }

    checkGenerationYearsText() {
        const text = '2016, 2017, 2018, 2019, 2020, 2021, 2022'
        this.items.getGenerationYearsText()
            .should('have.text', text)
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

    checkPagePagination() {
        this.items.getPagePagination()
            .should('be.visible')
    }

    checkTotalResultsCount(resultsCount) {
        this.items.getTotalResultsCount()
            .should('have.text', resultsCount)
    }

    checkProductsListLength(length) {
        this.items.getProductsList()
            .should('have.length', length)
        // this.items.getProductTotalsSpans()
        //     .then(function (totalsSpans) {
        //         for (let i = 0; i < totalsSpans.length; i++) {
        //             totalsSpans[i].should('contain', length)
        //         }
        //     })
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

    checkProductsSortedByPrice(){
        cy.get('.products_container li p[data-qatgt="price"]').invoke('text').then(priceList => {
            cy.log(priceList)
            for (let i = 0; i < priceList.length; i++) {
                // Cypress.$(priceList[i]).text().substr(1).trim().replace(/,/g, '').get()
                const price = parseFloat(priceList[i].substr(1).trim().replace(/,/g, ''))
                // priceList[i].substr(1).trim().replace(/,/g, '').get()
                //     .then(function (value) {
                //         const price = parseFloat(value)
                cy.wrap(price).should('be.gte', parseFloat(minPrice)); // greater than equal to
                cy.wrap(price).should('be.lte', parseFloat(maxPrice)); // less than equal to
                // })
            }
        });
    }

    checkCustomerRatingSortSelected() {
        this.items.getSortByList()
            .find('option:selected')
            .should('have.text', 'Customer Rating')
    }

}