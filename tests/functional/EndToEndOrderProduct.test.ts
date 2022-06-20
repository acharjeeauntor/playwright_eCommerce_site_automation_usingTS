import test from "@lib/BaseTest"
import { expect } from "@playwright/test"
import LoginData from "@data/LoginData.json"
import {Common} from "@utils/Common"
let token:string
let common:Common


common = new Common()

test.describe("End to End Product Order test",async()=>{
    test.beforeAll(async () => {
        token = await common.getLoginToken(LoginData.ValidLoginData.Email, LoginData.ValidLoginData.Password)
    })

    test.beforeEach(async ({ homePage }) => {
         common.setTokenInLocalStroage(homePage.page, token)
        await homePage.page.goto("https://rahulshettyacademy.com/client")
    })
    test("Add to cart a product from product details and complete the order",async({homePage,productDetailsPage})=>{
        await homePage.clickViewBtnofProductItem("zara coat 3")
        await productDetailsPage.clickAddToCartBtn()
        let response  = await productDetailsPage.page.waitForResponse("https://rahulshettyacademy.com/api/ecom/user/add-to-cart")
        let responseJsonData = await response.json()
        let responseMsg = await responseJsonData.message
        console.log(await productDetailsPage.getToastMsg())
        // expect(responseMsg).toBe()

        //await homePage.page.pause()
    })
})