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
        })

        describe(`Open "${Rotors} Page"`, () => {
            it(`Verify hovering "${Brakes}" NavItem`, () => {
                mActions.hoverBrakes()
            })

            it(`Verify clicking "${Rotors}" Category for "${Brakes}" `, () => {
                mActions.clickRotor()
            })

            it(`Verify loading "${Rotors}" page`, () => {
                mTests.checkCamaroRotorsPageLoading()
            })

            it(`Verify "${Rotors}" Breadcrumb Selected`, () => {
                mTests.checkPageBreadcrumbSelectedItem('2016-2022 Camaro Rotors')
            })

            it(`Verify page breadcrumbs`, () => {
                mTests.checkPageBreadcrumbs()
            })
        })

        describe(`Select Custom Filters`, () => {
            it(`Verify selecting "${Rotors_filter}" Filter`, () => {
                mActions.selectRotorDrumsFilter()
                mActions.saveRotorDrumsFilterCount()
                mTests.checkRotorDrumsSelected()
            })

            it(`Verify results Pagination visible`, () => {
                mTests.checkPagePagination()
            })

            it(`Verify Product List Size after Filter`, () => {
                // cy.get('@RotorsCount').then((text) => {
                mTests.checkTotalResultsCount(189)
                // })
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
                mTests.checkProductsSortedByPrice()
            });

            it(`Verify Sorting items based on "Customer rating"`, () => {
                mActions.selectCustomerRatingSortFilter()
                mTests.checkCustomerRatingSortSelected()
            })
        })
    })

}