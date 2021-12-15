import { Brakes, CamaroPageTitle, maxPrice, minPrice, Rotors, Rotors_filter } from "../../utils/app_constants"
import { CamaroPageActions } from "./actions"
import { CamaroPageTests } from "./tests"

export function CamaroPageTesting() {

    context(`"${CamaroPageTitle}"`, () => {

        let mActions = new CamaroPageActions()
        let mTests = new CamaroPageTests()

        describe(`Open "${CamaroPageTitle}"`, () => {
            it(`Verify loading "${CamaroPageTitle}"`, () => {
                mTests.checkCamaroPageLoading()
            })

            // it(`Verify closing "Auto loaded"`, () => {
            //     mTests.checkAutoLoadedModalVisible()
            // })

            it(`Verify "${CamaroPageTitle}" Title and Year`, () => {
                mTests.checkCamaroTitleAndYear()
            })

            it(`Verify Search Input Placholder`, () => {
                mTests.checkSearchInput("Search '16-'22 Camaro Parts")
            })

            it(`Verify hovering "${Brakes}" NavItem`, () => {
                mActions.hoverBrakes()
            })

            it(`Verify clicking "${Rotors}" Category for "${Brakes}" `, () => {
                mActions.clickRotor()
            })

            it(`Verify loading "${Rotors}" page`, () => {
                mTests.checkCamaroRotorsPageLoading()
            })
        })

        describe(`Select Custom Filters`, () => {
            it(`Verify selecting "${Rotors_filter}" Filter`, () => {
                mActions.selectRotorDrumsFilter()
                mActions.saveRotorDrumsFilterCount()
                mTests.checkRotorDrumsSelected()
            })

            it(`Verify Product List Size after Filter`, () => {
                cy.get('@RotorsCount').then((text) => {
                    mTests.checkProductsListCount(text)
                })
            })

            it(`Verify filling Min_Price Filter`, () => {
                mActions.fillMinPriceInput(minPrice)
                mTests.checkMinPriceFilterInputValue(minPrice)
            })

            it(`Verify filling Max_Price Filter`, () => {
                mActions.fillMaxPriceInput(maxPrice)
                mTests.checkMaxPriceFilterInputValue(maxPrice)
            })

            it(`Verify clicking "Go" button in Price Filter`, () => {
                const url = "https://www.americanmuscle.com/ajax/SubCatProductPaging"
                cy.intercept('POST', url).as('brakesRequest');

                mActions.clickPriceFilterButton()

                cy.wait('@brakesRequest');
            })

            it(`Verify Chosen Filters showed correctly`, () => {
                mTests.checkChosenFilters()
            })

            it(`Verify Products Prices between [${minPrice} ,${maxPrice}]`, function () {
                cy.get('.products_container li p[data-qatgt="price"]').then(priceList => {

                    cy.log(priceList)

                    for (let i = 0; i < priceList.length; i++) {
                        Cypress.$(priceList[i]).text().substr(1).trim().replace(/,/g, '').get()
                            .then(function (value) {
                                const price = parseFloat(value)
                                cy.wrap(price).should('be.gte', parseFloat(minPrice)); // greater than equal to
                                cy.wrap(price).should('be.lte', parseFloat(maxPrice)); // less than equal to
                            })
                    }

                    // ele.map((index, el) => Cypress.$(el).text().substr(1).trim().replace(/,/g, '')).get()
                    // .then((value) => {
                    //     const price = parseFloat(value)
                    //     cy.wrap(price).should('be.gte', parseFloat(minPrice)); // greater than equal to
                    //     cy.wrap(price).should('be.lte', parseFloat(maxPrice)); // less than equal to
                    // })
                    // // const unsortedItems = ele.map((index, el) => Cypress.$(el).text().substr(1).trim().replace(/,/g, '')).get();
                    // // const sortedItems = unsortedItems.slice().sort((a, b) => parseFloat(a) - parseFloat(b));
                    // // expect(sortedItems, 'Items are sorted').to.deep.equal(unsortedItems);
                });
            });

            it(`Verify Sorting items based on "Customer rating"`, () => {
                mActions.selectCustomerRatingSortFilter()
                mTests.checkCustomerRatingSortSelected()
            })
        })
    })

}