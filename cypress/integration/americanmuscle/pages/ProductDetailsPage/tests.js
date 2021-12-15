import { ProductDetailsPageItems } from "./items"

export class ProductDetailsPageTests {

    constructor() {
        this.items = new ProductDetailsPageItems()
    }

    checkProductDetailsPageLoading(href) {
        cy.url().should('include', href)
        // cy.url().should('include', ProductName.toLowerCase().replace(/ /g, '-'))
    }

    checkProductTitle(value) {
        this.items.getProductTitle()
            .should('contain', value)
    }

    checkProductPrice(value) {
        this.items.getProductPrice()
            .should('contain', value)
    }

    checkProductBrand(value) {
        this.items.getProductBrand()
            .should('have.attr', 'src', value)
    }

    checkProductReviewsCount(value) {
        this.items.getProductReviewsCount()
            .should('have.text', value)
    }

    checkProductSku(value) {
        this.items.getProductSku()
            .should('have.text', value)
    }

    //Saved For Later
    checkSaveLaterBoxVisible() {
        this.items.getSaveLaterBox()
            .should('not.have.class', 'hidden')
    }

    checkSaveLaterSuccessMsg() {
        this.items.getSaveLaterBoxSuccessMsg()
            .should('be.visible')
    }
}
