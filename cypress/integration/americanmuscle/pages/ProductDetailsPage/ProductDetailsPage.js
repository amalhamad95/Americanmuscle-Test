import { ProductDetailsPageTitle } from "../../utils/app_constants"
import { ProductDetailsPageActions } from "./actions"
import { ProductDetailsPageTests } from "./tests"

export function ProductDetailsPageTesting(product) {

    context(`"${ProductDetailsPageTitle}"`, () => {

        let mActions = new ProductDetailsPageActions()
        let mTests = new ProductDetailsPageTests()

        // describe(`Open "${product.name}" Details Page`, () => {
        //     it(`Verify clicking on "${product.name}"`, () => {
        //         cy.wait(1 * 1000)
        //         mActions.clickProduct()
        //     })

        //     it(`Verify loading "${ProductDetailsPageTitle}"`, () => {
        //         mTests.checkProductDetailsPageLoading(product.href)
        //     })
        // })

        describe(`Check Product Details`, () => {
            it(`Verify "Product Name" appears correctly`, () => {
                mTests.checkProductTitle(product.name)
            })

            it(`Verify "Product Price" appears correctly`, () => {
                mTests.checkProductPrice(product.price)
            })

            it(`Verify "Product Brand" appears correctly`, () => {
                mTests.checkProductBrand(product.brand)
            })

            it(`Verify "Product Sku" appears correctly`, () => {
                mTests.checkProductSku("Item " + product.sku)
            })

            it(`Verify "Product Reviews Count" appears correctly`, () => {
                mTests.checkProductReviewsCount(product.reviews + " Reviews")
            })
        })

        describe(`Add Product to Saved Products`, () => {
            it(`Verify clicking on "Save for later" button`, () => {
                mActions.clickSaveForLaterButton()
            })

            // it(`Verify "Save for later Box"  is visible`, () => {
            //     mTests.checkSaveLaterBoxVisible()
            // })

            it(`Verify filling Email address`, () => {
                mActions.fillSaveLaterBoxEmail('test@test.com')
            })

            it(`Verify clicking Submit button`, () => {
                mActions.clickSaveLaterBoxSubmitButton()
            })

            it(`Verify Save Later Success Msg is visible`, () => {
                mTests.checkSaveLaterSuccessMsg()
            })
        })
    })

}