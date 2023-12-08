
const baseurl = Cypress.config('url')
const email = Cypress.config('Admin')
const password = Cypress.config('Password')

export class MarketPage {

    market_button = 'a.link[href="/market"]'
    search_field = 'input[placeholder="Search coin"]'
    searchedTableValue = '.ms-3'
    

    clickMarket() {
        cy.wait(1000)
        cy.get(this.market_button).click();
    }

    enterSearchText(Coin) {
        cy.wait(1000)
        cy.get(this.search_field).type(Coin);
    }


}