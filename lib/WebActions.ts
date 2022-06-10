import { Page } from "@playwright/test"


export class WebActions {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }


    async waitForElementAttached(selector: string): Promise<void> {
        // wait for visible the locator or web element
        await this.page.locator(selector).waitFor()
    }

    async clickElement(selector: string): Promise<void> {
        await this.waitForElementAttached(selector)
        await this.page.click(selector)
    }

    async navigateToURL(url: string): Promise<void> {
        await this.page.goto(url);
    }



}