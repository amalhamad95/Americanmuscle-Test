import { HomePageItems } from "./items";

export class HomePageActions {

    constructor() {
        this.items = new HomePageItems()
    }

    //generation_select::Step01 Choose Your Vehicle
    hoverShopCamaroItem() {
        this.items.getShopCamaroItem()
            .realHover()
    }

    clickShopCamaroItem() {
        this.items.getShopCamaroItem()
            .click()
    }

    //generation_select::Step02 Choose Your Camaro
    hoverShopCamaroYear() {
        this.items.getShopCamaroYear()
            .realHover()
    }

    clickShopCamaroYear() {
        this.items.getShopCamaroYear()
            .click()
    }

}