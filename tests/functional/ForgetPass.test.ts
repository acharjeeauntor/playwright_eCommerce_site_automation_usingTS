import test from "@lib/BaseTest"
import {expect} from "@playwright/test"
import ForgetPassData from "@data/ForgetPassData.json"

test.describe("Test Forget Password feature",async()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.goToLoginPage("/client")
    })

    test("Verify empty field validation in forget password page",async()=>{

    })
})