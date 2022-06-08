import { Page } from '@playwright/test'
import { LoginPageObjects } from "@objects/LoginPageObjects"
import { WebActions } from "@lib/WebActions"

let webActions: WebActions
let loginPageObjects: LoginPageObjects

export class LoginPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        loginPageObjects = new LoginPageObjects()
    }


    async clickRegisterBtn(): Promise<void> {
        await webActions.clickElement(loginPageObjects.Register_Btn_Selector)
    }


}