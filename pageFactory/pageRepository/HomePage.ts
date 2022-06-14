import { Page } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { HomePageObjects } from "@objects/HomePageObjects"

let webActions: WebActions
let homePageObjects: HomePageObjects

export class HomePage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        homePageObjects = new HomePageObjects()
    }


    async searchProduct(productName: string): Promise<void> {
        await webActions.fillInputField(homePageObjects.Search_Input_Selector, productName)
        await this.page.keyboard.press("Enter")
    }

    async setMinimumAndMaxPriceRange(minimum: string, maximum: string): Promise<void> {
        await webActions.fillInputField(homePageObjects.MinimumPrice_Input_Selector, minimum)
        await webActions.fillInputField(homePageObjects.MaximumPrice_Input_Selector, maximum)
        await this.page.keyboard.press("Enter")
    }

}