export class HomePageItems {

    constructor() { }

    // getCartCount() {
    //     return cy.get('.cart_trigger span.cart_count')
    // }

    //generation_select::Step01 Choose Your Vehicle
    getMainBannerContainer() {
        return cy.get('.generation_select > .vehicle_select_container')
    }

    getMainBannerStep01Title() {
        return cy.get('.vehicle_select_container > h2')
    }

    getShopCamaroItem() {
        return cy.get('a.camaro_trigger')
    }

    //generation_select::Step02 Choose Your Camaro
    getMainBannerStep02Title() {
        return cy.get('.camaro > h2')
    }

    getShopCamaroYear() {
        return cy.get('[href="/2016-camaro-accessories-parts.html"] > .text_cta')
    }

}