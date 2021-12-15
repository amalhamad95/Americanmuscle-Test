import { ShoppingCartPageTitle } from "../../utils/app_constants"
import { CartPageActions } from "./actions"
import { CartPageItems } from "./items"
import { CartPageTests } from "./tests"

export function ShoppingCartPageTesting(product) {

    let newCost = parseFloat(product.price.substr(1)) * 11
    const newQty = '11'

    context(`"${ShoppingCartPageTitle}"`, () => {

        let mItems = new CartPageItems()
        let mActions = new CartPageActions()
        let mTests = new CartPageTests()

        describe(`Open "${ShoppingCartPageTitle}"`, () => {
            it(`Verify loading "${ShoppingCartPageTitle}"`, () => {
                mTests.checkCartPageLoading()
            })

            it(`Verify "Product Data" appears correctly`, () => {
                // cy.get('.products_container li a[data-sku="' + product.sku + '"]')
                //     // .contains('data-sku', product.sku)
                //     .should('have.attr', 'data-title', product.name)

                mItems.getCartSpecificProduct()
                    .find('.product_name a')
                    .should('contain', product.name)

                mItems.getCartSpecificProduct()
                    .find('div.unit_price')
                    .should('contain', product.price)
            })
        })

        describe(`Changing product quantity`, () => {
            it(`Verify clicking on Product quantity list`, () => {
                mActions.clickProductQtyList()
            })

            it(`Verify changing Product quantity`, () => {
                const url = "https://www.americanmuscle.com/ajax/UpdateLineItemQuantity"
                cy.intercept('POST', url).as('updateQtyRequest');

                mActions.clickProductQtyListItem(newQty)

                cy.wait('@updateQtyRequest')

                mTests.checkProductQtyText(newQty)
            })

            it(`Verify product Cost updating`, () => {
                mTests.checkProductCost("$" + newCost)
            })

            it(`Verify Cart subTotal updating`, () => {
                mTests.checkCartSubTotal("$" + newCost)
            })
        })

        describe(`Open MiniCart`, () => {
            it(`Verify Cart Count changed`, () => {
                cy.checkCartCount(newQty)
            })

            it(`Verify hovering MiniCart icon`, () => {
                mActions.hoverMiniCartIcon()
            })

            it(`Verify MiniCart contanin "${product.name}"`, () => {
                mTests.checkMiniCartSpecificProductQty(newQty)
            })
        })
    })
}