import { BaseUrl } from "../support/constants";
class toDosPage{

    //Locators
    todosInputField = '[data-testid="text-input"]'


    //Methods

    visit() {
        cy.visit(BaseUrl)
    }
}

export default new toDosPage