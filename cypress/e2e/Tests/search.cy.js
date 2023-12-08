import { MarketPage } from "../Pages/search"
import { Conditions } from "../Actions/conditions"

const marketPage = new MarketPage()
const conditions = new Conditions()
const baseurl = Cypress.config('url')

describe('Market page test cases', function () {

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.visit(baseurl)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it('Should search SOL', function () {

        marketPage.clickMarket()
        marketPage.enterSearchText("SOL")
        conditions.elementContainsText(marketPage.searchedTableValue, "SOL")
    })

    it('Should search ADA', function () {

        marketPage.clickMarket()
        marketPage.enterSearchText("ADA")
        conditions.elementContainsText(marketPage.searchedTableValue, "ADA")
    })

})