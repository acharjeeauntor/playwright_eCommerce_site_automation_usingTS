import { Page } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import {HomePageObjects} from "@objects/HomePageObjects"

let webActions: WebActions
let homePageObjects:HomePageObjects

export class HomePage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        homePageObjects = new HomePageObjects()
    }
}