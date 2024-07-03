import { BaseUrl } from "../support/constants";
class toDosPage{

    //Locators
    toDosHeader         = 'h1'
    toDosInputField     = '[data-testid="text-input"]'
    toDosItemLabel      = '[data-testid="todo-item-label"]'
    toDosItemToogle     = '[data-testid="todo-item-toggle"]'
    toDosCompletedBtn   = '[data-testid="footer-navigation"] > :nth-child(3) > a'
    toDosClearCompletedBtn = '.clear-completed'

    //Methods
    //Launch to Website
    visit() {
        cy.visit(BaseUrl)
    }

    //Add new Todo
    addNewToDos(toDosName) {
        cy.get(this.toDosInputField).type(toDosName).type('{enter}')
        cy.get(this.toDosItemLabel).should('contain', toDosName)
          
    }
}

export default new toDosPage