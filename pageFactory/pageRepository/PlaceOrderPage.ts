import { Page } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { PlaceOrderPageObjects } from "@objects/PlaceOrderPageObjects"

let webActions: WebActions
let placeOrderPageObjects: PlaceOrderPageObjects


export class PlaceOrderPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        placeOrderPageObjects = new PlaceOrderPageObjects()
    }


    async selectCounty(country: string): Promise<void> {
        // Click [placeholder="Select Country"]
        await this.page.locator('[placeholder="Select Country"]').click();
        // Fill [placeholder="Select Country"]
        await this.page.locator('[placeholder="Select Country"]').fill('bangla');
        // Click button:has-text("Bangladesh")
        await this.page.locator('button:has-text("Bangladesh")').click();
        // Click text=Place Order
        await Promise.all([
            this.page.waitForNavigation(/*{ url: 'https://rahulshettyacademy.com/client/dashboard/thanks?prop=%5B%2262b0b00de26b7e1a10ee5cd9%22%5D' }*/),
            this.page.locator('text=Place Order').click()
        ]);
        await this.page.pause()
    }




}