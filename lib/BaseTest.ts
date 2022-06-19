import { test as baseTest } from "@playwright/test"
import { LoginPage } from "pageFactory/pageRepository/LoginPage"
import { RegisterPage } from "pageFactory/pageRepository/RegisterPage"
import {ForgetPassPage} from "pageFactory/pageRepository/ForgetPassPage"
import {HomePage} from "pageFactory/pageRepository/HomePage"
import {NavBar} from "pageFactory/pageRepository/NavBar"
import {OrdersPage} from "pageFactory/pageRepository/OrdersPage"
import {ProductDetailsPage} from "pageFactory/pageRepository/ProductDetailsPage"


const test = baseTest.extend<{
    loginPage: LoginPage,
    registerPage: RegisterPage
    forgetPassPage:ForgetPassPage
    homePage:HomePage
    navBar:NavBar
    ordersPage:OrdersPage
    productDetailsPage:ProductDetailsPage
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    },
    forgetPassPage:async({page},use)=>{
        await use(new ForgetPassPage(page))
    },
    homePage:async({page},use)=>{
        await use(new HomePage(page))
    },
    navBar:async({page},use)=>{
        await use(new NavBar(page))
    },
    ordersPage:async({page},use)=>{
        await use(new OrdersPage(page))
    },
    productDetailsPage:async({page},use)=>{
        await use(new  ProductDetailsPage(page))
    }

})


export default test