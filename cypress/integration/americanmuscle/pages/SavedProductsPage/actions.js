import { SavedProductsPageItems } from "./items"

export class SavedProductsPageActions {

    constructor() {
        this.items = new SavedProductsPageItems()
    }

    hoverMyAccountMenu() {
        this.items.getMyAccountSubMenu()
            .click()
        // .invoke('show')
    }

    clickSavedProductsMenuItem() {
        this.items.getSavedProductMenuItem()
            .click({ force: true })
    }

    clickProductAddToCart() {
        this.items.getAddToCartButton()
            .click()
    }
}