import { saved_products_url } from "../../utils/app_constants";
import { SavedProductsPageItems } from "./items";

export class SavedProductsPageTests {

    constructor() {
        this.items = new SavedProductsPageItems()
    }

    checkSavedProductsPageLoading() {
        cy.checkPageUrl(saved_products_url, 'My Account')
    }

    checkPageBreadcrumbSelectedItem() {
        this.items.getPageBreadcrumb()
            .children()
            .not('.text_link')
            .should('contain', 'Saved for Later')
    }

    checkSavedProductCount(count) {
        this.items.getSavedProductCount()
            .should('have.text', (count + ' Items'))
    }

}