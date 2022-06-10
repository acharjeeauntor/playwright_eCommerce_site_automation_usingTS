import { test as baseTest } from "@playwright/test"
import { LoginPage } from "@pages/LoginPage"
import { RegisterPage } from "@pages/RegisterPage"


const test = baseTest.extend<{
    loginPage: LoginPage,
    registerPage: RegisterPage
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    }
})


export default test