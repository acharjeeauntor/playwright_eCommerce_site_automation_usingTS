import { Page } from "@playwright/test"
import { RegisterPageObjects } from "@objects/RegisterPageObjects"
import { WebActions } from "@lib/WebActions"

let webActions: WebActions
let registerPageObjects: RegisterPageObjects

export class RegisterPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        registerPageObjects = new RegisterPageObjects()
    }

    async enterFirstName(fName: string): Promise<void> {
        await webActions.fillInputField(registerPageObjects.FirstName_Input_Selector, fName)
    }

    async enterLastName(LName: string): Promise<void> {
        await webActions.fillInputField(registerPageObjects.LastName_Input_Selector, LName)
    }

    async enterEmail(email: string): Promise<void> {
        await webActions.fillInputField(registerPageObjects.Email_Input_Selector, email)
    }

    async enterPhoneNumber(phone: string): Promise<void> {
        await webActions.fillInputField(registerPageObjects.PhoneNumber_Input_Selector, phone)
    }
    async SelectOccupation(label: string): Promise<void> {
        await webActions.selectDropDownByLabel(registerPageObjects.Occupation_DropDown_Selector, label)
    }

    async selectGender(input: string): Promise<void> {
        if (input === "Male") {
            await this.page.locator(registerPageObjects.Gender_RadioBtn_Selector).first().click()
        } else if (input === "Female") {
            await this.page.locator(registerPageObjects.Gender_RadioBtn_Selector).last().click()
        }
    }

    async enterPassword(pass: string): Promise<void> {
        await webActions.fillInputField(registerPageObjects.Password_Input_Selector, pass)
    }

    async enterConfirmPassword(confirmPass: string): Promise<void> {
        await webActions.fillInputField(registerPageObjects.ConfirmPassword_Input_Selector, confirmPass)
    }

    async checkRequiredCheckbox() {
        await webActions.checkElement(registerPageObjects.Required_Checkbox_Selector)
    }

    async clickRegisterConfirmBtn() {
        await webActions.clickElement(registerPageObjects.Register_Btn_Selector)
    }

    async getFirstNamePlaceholder(): Promise<string> {
        return await webActions.getAttributeValue(registerPageObjects.FirstName_Input_Selector,"placeholder")
    }

    // async getLastNamePlaceholder(): Promise<string> {
    //     await webActions.fillInputField(registerPageObjects.LastName_Input_Selector, LName)
    // }

    // async getEmailPlaceholder(): Promise<string> {
    //     await webActions.fillInputField(registerPageObjects.Email_Input_Selector, email)
    // }

    // async getPhoneNumberPlaceholder(): Promise<string> {
    //     await webActions.fillInputField(registerPageObjects.PhoneNumber_Input_Selector, phone)
    // }








}