import { SavedProductsPageTitle } from "../../utils/app_constants"
import { SavedProductsPageActions } from "./actions"
import { SavedProductsPageTests } from "./tests"

export function SavedProductsPageTesting(product) {

    context(`"${SavedProductsPageTitle}"`, () => {

        let mActions = new SavedProductsPageActions()
        let mTests = new SavedProductsPageTests()

        describe(`Open "${SavedProductsPageTitle}"`, () => {
            it(`Verify hovering "My Account" Menu`, () => {
                mActions.hoverMyAccountMenu()
            })

            it(`Verify clicking "Saved Products" Menu Item`, () => {
                mActions.clickSavedProductsMenuItem()
            })

            it(`Verify loading "${SavedProductsPageTitle}"`, () => {
                mTests.checkSavedProductsPageLoading()
            })

            it(`Verify Breadcrumb active item is "Saved for Later"`, () => {
                mTests.checkPageBreadcrumbSelectedItem()
            })

            it(`Verify Saved Product Items Count`, () => {
                // mTests.checkSavedProductsPageLoading()
                cy.get('.build_list p').invoke('text')
                    .then((text) => {
                        var fullText = text;
                        var pattern = /[0-9]+/g;
                        var number = fullText.match(pattern);
                        console.log(number);

                        cy.get('.products_container li')
                            .should('have.length', number)
                    })
            })
        })

        describe(`Adding product to Cart`, () => {
            it(`Verify "Product Data" appears correctly`, () => {
                // cy.get('.products_container li a[data-sku="' + product.sku + '"]')
                //     // .contains('data-sku', product.sku)
                //     .should('have.attr', 'data-title', product.name)

                cy.get('.products_container li a[data-sku="' + product.sku + '"]')
                    .closest('li')
                    .find('span.reviews-number')
                    .should('contain', product.reviews)

                cy.get('.products_container li a[data-sku="' + product.sku + '"]')
                    .closest('li')
                    .find('span.price')
                    .should('contain', product.price)
            })


            it(`Verify clicking on product "Add to cart" button`, () => {
                mActions.clickProductAddToCart()
            })

            it(`Verify Cart Count changed`, () => {
                cy.checkCartCount('1')
            })
        })
    })

}