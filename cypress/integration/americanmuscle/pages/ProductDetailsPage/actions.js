import { ProductDetailsPageItems } from "./items";

export class ProductDetailsPageActions {

    constructor() {
        this.items = new ProductDetailsPageItems()
    }

    clickProduct() {
        this.items.getSpecificProduct()
            .click()
    }

    selectProductQtyNum(num) {
        this.items.getProductQtyList()
            .eq(num)
            .click({ force: true })
    }

    clickSaveForLaterButton() {
        this.items.getSaveForLaterButton()
            .click()
    }

    fillSaveLaterBoxEmail(value) {
        this.items.getSaveLaterBoxEmail()
            .type(value, { force: true })
    }

    clickSaveLaterBoxSubmitButton() {
        this.items.getSaveLaterBoxSubmitButton()
            .click({ force: true })
    }
}