import test from "@lib/BaseTest"


test('click register', async ({ loginPage }) => {
    await loginPage.clickRegisterBtn()
})
