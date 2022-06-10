import test from "@lib/BaseTest"


test('click register', async ({ loginPage }) => {
    await loginPage.goToLoginPage("/client")
    await loginPage.clickRegisterBtn()

})
