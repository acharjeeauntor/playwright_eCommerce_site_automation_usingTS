import { Page } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { CartPageObjects } from "@objects/CartPageObjects"

let webActions: WebActions
let cartPageObjects: CartPageObjects


export class CartPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        cartPageObjects = new CartPageObjects()
    }


    async clickBuyNowBtnOfCartItem(pName: string): Promise<void> {
        await this.page.locator(cartPageObjects.Cart_Item_Selector).first().waitFor()
        let cartProducts = this.page.locator(cartPageObjects.Cart_Item_Selector)
        let totalProducts = await cartProducts.count()

        if (totalProducts == 1) {
            await cartProducts.locator(cartPageObjects.Buy_Now_Btn_Selector).click()
        } else if (totalProducts > 1) {
            for (var i = 0; i < totalProducts; i++) {
                let productName = await cartProducts.nth(i).locator(cartPageObjects.Product_Name_Selector).textContent()
                if (productName === pName) {
                    await cartProducts.nth(i).locator(cartPageObjects.Buy_Now_Btn_Selector).click()
                    break
                }
            }
        }

    }

    async clickDeleteBtnOfCartItem(pName: string): Promise<void> {
        await this.page.locator(cartPageObjects.Cart_Item_Selector).first().waitFor()
        let cartProducts = this.page.locator(cartPageObjects.Cart_Item_Selector)
        let totalProducts = await cartProducts.count()

        if (totalProducts == 1) {
            await cartProducts.locator(cartPageObjects.Delete_Btn_Selector).click()
        } else if (totalProducts > 1) {
            for (var i = 0; i < totalProducts; i++) {
                let productName = await cartProducts.nth(i).locator(cartPageObjects.Product_Name_Selector).textContent()
                if (productName === pName) {
                    await cartProducts.nth(i).locator(cartPageObjects.Delete_Btn_Selector).click()
                    break
                }
            }
        }

    }

    async getNoCartText(): Promise<string> {
        return await webActions.getElementText(cartPageObjects.No_Cart_Test_Selector)
    }

    async clickContinueShoppingBtn(): Promise<void> {
        await webActions.clickElement(cartPageObjects.ContinueShopping_Btn_Selector)
    }


}