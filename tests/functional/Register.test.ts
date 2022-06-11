import test from "@lib/BaseTest"
import RegisterData from "@data/registerData.json"
import {expect} from "@playwright/test"



test.describe("Test Register feature", async () => {
    test("Verify a user can register to the application using valid input", async ({ registerPage,loginPage }) => {
        await loginPage.goToLoginPage("/client")
        await loginPage.clickRegisterBtn()
        await registerPage.enterFirstName(RegisterData.ValidData.FirstName)
        await registerPage.enterLastName(RegisterData.ValidData.LastName)
        await registerPage.enterEmail(RegisterData.ValidData.Email)
        await registerPage.enterPhoneNumber(RegisterData.ValidData.PhoneNumber)
        await registerPage.SelectOccupation(RegisterData.ValidData.Occupation)
        await registerPage.selectGender(RegisterData.ValidData.Gender)
        await registerPage.enterPassword(RegisterData.ValidData.Password)
        await registerPage.enterConfirmPassword(RegisterData.ValidData.ConfirmPassword)
        await registerPage.checkRequiredCheckbox()
        await registerPage.page.pause()
    })

    test.only("Verify input fields placeholder is showing correctly or not",async({registerPage,loginPage})=>{
        await loginPage.goToLoginPage("/client")
        await loginPage.clickRegisterBtn()
        console.log(await registerPage.getFirstNamePlaceholder())
        expect(await registerPage.getFirstNamePlaceholder()).toBe("First Name")
        
    })
})