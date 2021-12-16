import { ProductName, ProductSKu } from "../../utils/app_constants"

export class CartPageItems {

    constructor() { }

    //Cart Products
    getCartSpecificProduct() {
        return cy.get('ul.cart_list li.product_item')
            .contains(ProductSKu)
            .closest('li')
    }

    getProductPrice() {
        return this.getCartSpecificProduct()
            .find('.unit_price')
    }

    getProductQtyList() {
        return this.getCartSpecificProduct()
            .find('.dropdown > button')
        // return cy.get('ul.dropdown-menu')
    }

    getProductQtyListItem(count) {
        return this.getCartSpecificProduct()
            .find('.dropdown ul.dropdown-menu li[data-value="' + count + '"]')
    }

    getProductQtyText() {
        return this.getCartSpecificProduct()
            .find('span.review')
    }

    getProductCost() {
        return this.getCartSpecificProduct()
            .find('.sub_total')
    }

    //Cart Totals
    getCartSubTotal() {
        return cy.get('.summary_container li.total span')
    }

    //MiniCart
    getMiniCartIcon(){
        return cy.get('.cart_container')
    }

    getMiniCartSpecificProduct() {
        return cy.get('.mini_cart li')
            .contains(ProductName)
            .parent()
            // .closest('li')
    }
}