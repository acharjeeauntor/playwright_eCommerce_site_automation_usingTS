import test from "@lib/BaseTest"
import { expect } from "@playwright/test"
import ForgetPassData from "@data/ForgetPassData.json"

test.describe("Test Forget Password feature", async () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage("/client")
        await loginPage.clickForgetPassLink()
    })

    test("Verify required fields validation", async ({ forgetPassPage }) => {
        await forgetPassPage.clickSaveNewPassBtn()
        expect(await forgetPassPage.getRequiredFieldErrorMessages()).toStrictEqual(ForgetPassData.RequiredFieldsErrorMsg)
    })


    test.only("Verify invalid email and Confirm password field validation in forget password page", async ({ forgetPassPage }) => {
        await forgetPassPage.enterEmail(ForgetPassData.InvalidData.Email)
        await forgetPassPage.enterPassword(ForgetPassData.InvalidData.Password)
        await forgetPassPage.enterConfirmPassword(ForgetPassData.InvalidData.ConfirmPassword)
        await forgetPassPage.clickSaveNewPassBtn()
        expect(await forgetPassPage.getRequiredFieldErrorMessages()).toStrictEqual(ForgetPassData.InvalidEmailPasswordErrorMsg)
    })

    test("Verify input fields placeholder is showing correctly or not", async ({ forgetPassPage }) => {

        expect(await forgetPassPage.getEmailPlaceholder()).toBe(ForgetPassData.PlaceholderData.Email)
        expect(await forgetPassPage.getPasswordPlaceholder()).toBe(ForgetPassData.PlaceholderData.Password)
        expect(await forgetPassPage.getConfirmPasswordPlaceholder()).toBe(ForgetPassData.PlaceholderData.ConfirmPassword)


    })

    test("Verify new password is set successfully or not", async ({ forgetPassPage }) => {
        await forgetPassPage.enterEmail()
        await forgetPassPage.enterPassword()
        await forgetPassPage.enterConfirmPassword()
    })

    test("Verify invalid password can not be set after saving password from forget password page", async () => {

    })
})