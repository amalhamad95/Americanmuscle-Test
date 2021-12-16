import { ProductName, ProductSKu } from "../../utils/app_constants"

export class ProductDetailsPageItems {

    constructor() { }

    getSpecificProduct() {
        return cy.get('.products_container li a[data-qatgt="productName"]')
        // return cy.get('.products_container li')
            .contains(ProductName)
    }

    getProductTitle() {
        return cy.get('.headline_container .product_name')
    }

    getProductPrice() {
        return cy.get('.price_amount')
    }

    getProductBrand() {
        return cy.get('.brand img')
    }

    getProductReviewsCount() {
        return cy.get('a[href="#customer_reviews"] span.count')
    }

    getProductSku() {
        return cy.get('.headline_container .sku')
    }

    getProductQtyList() {
        return cy.get('ul.dropdown-menu li')
    }

    getCartCount() {
        return cy.get('.cart_trigger span.cart_count')
    }

    //Save For Later
    getSaveForLaterButton() {
        return cy.get('.triggers > .save_for_later_trigger')
    }

    getSaveLaterBox() {
        return cy.get('saved_for_later_login_container_bottom')
    }

    getSaveLaterBoxEmail() {
        return cy.get('.order_details > .saved_for_later_login_container > .box_and_triangle > .input > #email')
    }

    getSaveLaterBoxSubmitButton() {
        return cy.get('.order_details > .saved_for_later_login_container > .box_and_triangle > .input > .alt_btn')
    }

    getSaveLaterBoxSuccessMsg() {
        return cy.get('.save_for_later_container p[class="saved"]')
    }
}