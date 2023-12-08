export class Conditions {

    //url to Contain
    urlToContain(url) {
        cy.url()
            .should('include', url)
    };

    //visibility of element to be true
    elementIsDisplayed(element) {
        cy.wait(2000)
        cy.get(element)
            .should("be.visible")
    };

    elementContainsText(element, text) {
        cy.wait(2000)
        cy.get(element)
            .invoke('text')
            .should('contain', text);
    };

}