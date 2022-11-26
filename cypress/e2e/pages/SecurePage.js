export default class SecurePage{
    path = "/secure";

    messageDiv = "div[id = 'flash']";

    getMessage() {
        return cy.get(this.messageDiv).invoke('text');
    }
}