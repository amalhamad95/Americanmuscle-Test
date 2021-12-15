import { HomePageTitle, ShopCamaro } from "../../utils/app_constants"
import { HomePageActions } from "./actions"
import { HomePageTests } from "./tests"

export function HomePageTesting() {

    context(`"${HomePageTitle}"`, () => {

        let mActions = new HomePageActions()
        let mTests = new HomePageTests()

        describe(`Open "${HomePageTitle}"`, () => {

            it(`Verify loading "${HomePageTitle}"`, () => {
                mTests.checkHomePageLoading()
            })

            it(`Verify Cart Count is ZERO`, () => {
                cy.checkCartCount('0')
            })
        })

        describe(`Selecting Vehicle Main Banner Steps`, () => {

            describe('Step 01', () => {
                it(`Verify Step01 Title`, () => {
                    mTests.checkMainBannerStep01Title()
                })

                it(`Verify hovering "${ShopCamaro}"`, () => {
                    mActions.hoverShopCamaroItem()
                    mTests.checkShopCamaroHover()
                })

                it(`Verify clicking "${ShopCamaro}"`, () => {
                    mActions.clickShopCamaroItem()
                    mTests.checkShopCamaroSelected()
                    mTests.checkShopCamaroURL()
                })
            })

            describe('Step 02', () => {
                it(`Verify Step02 Title`, () => {
                    mTests.checkMainBannerStep02Title()
                })

                it(`Verify hovering "${ShopCamaro} Year"`, () => {
                    mActions.hoverShopCamaroYear()
                    mTests.checkShopCamaroYearHover()
                })

                it(`Verify clicking "${ShopCamaro} Year"`, () => {
                    mActions.clickShopCamaroYear()
                })
            })
        })
    })
}