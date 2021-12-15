import { ProductName, ProductSKu } from "../../utils/app_constants"

export class SavedProductsPageItems {

    constructor() { }

    getMyAccountSubMenu() {
        return cy.get('.my_account_trigger_container')
    }

    getSavedProductMenuItem() {
        return cy.get('.menu_list a[href="/saved-for-later.html"]')
    }

    getPageBreadcrumb() {
        return cy.get('ul.steps')
    }

    getSavedProductCount() {
        return cy.get('.build_list p')
    }

    getAddToCartButton() {
        return cy.get('.products_container li a[data-sku="' + ProductSKu + '"]')
            .parent()
            .find('a.add_to_cart')
    }
}