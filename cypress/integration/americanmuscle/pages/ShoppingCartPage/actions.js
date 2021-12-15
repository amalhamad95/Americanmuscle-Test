import { CartPageItems } from "./items";

export class CartPageActions {

    constructor() {
        this.items = new CartPageItems()
    }

    //Cart Products
    selectProductQtyNum(num) {
        this.items.getProductQtyList()
            .eq(num)
            .click({ force: true })
    }

    clickProductQtyList() {
        this.items.getProductQtyList()
            .click()
    }

    clickProductQtyListItem(count) {
        this.items.getProductQtyListItem(count)
            .click({ force: true })
    }

    //MiniCart
    hoverMiniCartIcon() {
        this.items.getMiniCartIcon()
            .invoke('show')
    }
}