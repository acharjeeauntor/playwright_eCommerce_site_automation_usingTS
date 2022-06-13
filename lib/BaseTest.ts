import { test as baseTest } from "@playwright/test"
import { LoginPage } from "@pages/LoginPage"
import { RegisterPage } from "@pages/RegisterPage"
import {ForgetPassPage} from "@pages/ForgetPassPage"


const test = baseTest.extend<{
    loginPage: LoginPage,
    registerPage: RegisterPage
    forgetPassPage:ForgetPassPage
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    },
    forgetPassPage:async({page},use)=>{
        await use(new ForgetPassPage(page))
    }

})


export default test