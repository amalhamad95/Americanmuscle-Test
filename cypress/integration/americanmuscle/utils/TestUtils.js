// import { camaro_url, homeSliderStep01Title, homeSliderStep02Title } from "../../main/app_constants";
// import { HomePageItems } from "./items";

// export class TestUtils {

//     constructor() {
//         this.items = new HomePageItems();
//     }

//     checkPageUrl(url) {
//         cy.url().should('include', url)
//     }

//     checkTextValue(selector, value) {
//         this.items.getCartCount()
//             .should('have.text', count)
//     }

//     //generation_select::Step01 Choose Your Vehicle
//     checkMainBannerStep01Title() {
//         this.items.getMainBannerStep01Title()
//             .should('have.text', homeSliderStep01Title)
//     }

//     checkShopCamaroHover() {
//         this.items.getShopCamaroItem()
//             .find('span')
//             // .find('.text_cta')
//             // .should('have.css', 'color', 'rgb(245, 130, 31)') //#f5821f
//             .should('have.css', 'color', 'rgb(24, 145, 205)') //#1891cd
//     }

//     checkShopCamaroSelected() {
//         this.items.getMainBannerContainer()
//             .should('have.class', 'sub_panel_visible')
//             .and('have.class', 'show_camaro')
//     }

//     checkShopCamaroURL() {
//         cy.url().should('include', camaro_url)
//     }

//     //generation_select::Step02 Choose Your Camaro
//     checkMainBannerStep02Title() {
//         this.items.getMainBannerStep02Title()
//             .should('have.text', homeSliderStep02Title)
//     }

//     checkShopCamaroYearHover() {
//         this.items.getShopCamaroItem()
//             .find('span')
//             .should('have.text', '2016-2022')
//             // .find('.text_cta')
//             .should('have.css', 'color', 'rgb(24, 145, 205)') //#1891cd
//     }
// }