import { expect } from "@playwright/test"
import test from "@lib/BaseTest"
import LoginData from "@data/LoginData.json"
import { Common } from "@utils/Common"


let common: Common
let token: string
const fakePayLoadOrders: any = { data: [], message: "No Orders" };

common = new Common()





test.describe("Test Orders Page", async () => {

    test.beforeAll(async () => {
        token = await common.getLoginToken(LoginData.ValidLoginData.Email, LoginData.ValidLoginData.Password)
    })

    test.beforeEach(async ({ homePage }) => {
        common.setTokenInLocalStroage(homePage.page, token)
        await homePage.page.goto("https://rahulshettyacademy.com/client")
    })


    test("No order text verification", async ({ navBar, page, ordersPage }) => {
        await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6298e803e26b7e1a10ecbba3", async route => {
            const response = await page.request.fetch(route.request())
            console.log(response)
            let body = fakePayLoadOrders
            await route.fulfill({
                response,
                body,
            })

            console.log(route)
        })

        await navBar.clickOrdersBtn()
        //await page.waitForResponse()
        expect(await ordersPage.getNoOrderText()).toContain("You have No Orders to show at this time.")



    })



})