import toDosPage from "../pages/toDosPage";
import { BaseUrl } from "../support/constants";

describe('template spec', () => {
    beforeEach(() => {
        toDosPage.visit();
  });
  
    it('verify page title launch the website url ', () => {
    
      cy.title().should('eq', 'TodoMVC: React')
    })

    it('add new todo  ', () => {
        cy.get(toDosPage.todosInputField).type("Neues To-Do").type('{enter}')
        cy.get('[data-testid="todo-item-label"]').should('contain', 'Neues To-Do')
      })
})