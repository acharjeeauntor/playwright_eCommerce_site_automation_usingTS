import test from "@lib/BaseTest"
//import RegisterData from "../../testData/"
test.describe("Test Register feature", async () => {
    test("Verify a user can register to the application using valid input", async ({ registerPage,loginPage }) => {
        await loginPage.goToLoginPage("/client")
        await loginPage.clickRegisterBtn()
        await registerPage.enterFirstName("cdfdf")
        await registerPage.enterLastName("dsdsd")
        await registerPage.enterEmail("sdsd@gmail.com")
        await registerPage.enterPhoneNumber("564564564545")
        await registerPage.SelectOccupation("Engineer")
        await registerPage.selectGender("Male")
        await registerPage.enterPassword("Aa@12345")
        await registerPage.enterConfirmPassword("Aa@12345")
        await registerPage.checkRequiredCheckbox()
        await registerPage.page.pause()
    })
})