import { cart_url } from "../../utils/app_constants"
import { CartPageItems } from "./items"

export class CartPageTests {

    constructor() {
        this.items = new CartPageItems()
    }

    checkCartPageLoading() {
        cy.checkPageUrl(cart_url, 'Your Cart')
    }

    //Cart Products
    checkProductQtyText(quantity) {
        this.items.getProductQtyText()
            .should('have.text', quantity)
    }

    checkProductCost(cost) {
        this.items.getProductCost()
            .invoke('text').then((text) => {
                let temp = text.replace(/,/g, '')
                expect(temp).to.equal(cost)
            })
        // .should('have.text', cost)
    }

    //Cart Totals
    checkCartSubTotal(total) {
        this.items.getCartSubTotal()
            .invoke('text').then((text) => {
                let temp = text.replace(/,/g, '')
                expect(temp).to.equal(total)
            })
    }

    //MiniCart
    checkMiniCartSpecificProductQty(qty) {
        this.items.getMiniCartSpecificProduct()
            .should('contain', qty)
    }

}
