import { Page } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { ForgetPassPageObjects } from "@objects/ForgetPassPageObjects"

let webActions: WebActions
let forgetPassPageObjects: ForgetPassPageObjects

export class ForgetPassPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        forgetPassPageObjects = new ForgetPassPageObjects()
        webActions = new WebActions(this.page)
    }
}