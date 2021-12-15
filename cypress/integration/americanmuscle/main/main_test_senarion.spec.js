/// <reference types="cypress" />

import { Product } from "../models/Product";
import { CamaroPageTesting } from "../pages/CamaroPage/CamaroPage";
import { HomePageTesting } from "../pages/HomePage/HomePage";
import { ProductDetailsPageTesting } from "../pages/ProductDetailsPage/ProductDetailsPage";
import { SavedProductsPageTesting } from "../pages/SavedProductsPage/SavedProductPage";
import { ShoppingCartPageTesting } from "../pages/ShoppingCartPage/ShoppingCartPage";

describe('Americanmuscle Main Test', () => {

    // let AppConstants;
    let product = new Product(
        "SP Performance Cross-Drilled and Slotted Rotors with Black Zinc Plating",
        "$249.11",
        "CC5419",
        "//turn5.scene7.com/is/image/Turn5/sp_performance",
        "3",
        "https://www.americanmuscle.com/sp-performance-camaro-cross-drilled-slotted-rotors-black-zinc-front-f55-2172-bp.html"
    )

    before(() => {
        // cy.visit('')
        cy.visit(product.href)
    })

    beforeEach(() => {
        cy.saveCookies()
        // cy.fixture('AppConstants').then(function (AppConstants) {
        //     cy.wrap(AppConstants.HomePage).as('HomePage')
        //     cy.wrap(AppConstants.mustang_url).as('mustang_url')
        // })
    });

    after(() => {
        cy.clearSiteData()
    })

    //************** Pages Test **************//
    HomePageTesting()
    CamaroPageTesting()
    ProductDetailsPageTesting(product)
    SavedProductsPageTesting(product)
    ShoppingCartPageTesting(product)

})
