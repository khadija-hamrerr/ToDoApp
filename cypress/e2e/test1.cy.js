import { appBaseUrl } from "../support/constants";


describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/')
});

  it('verify page title launch the website url ', () => {
  
    cy.title().should('eq', 'TodoMVC: React')
  })

  it('verify page title launch the website title ', () => {
  
    cy.get('h1').contains('todos')
  })

  it('verify page title launch the website  ', () => {

    cy.title().should('contain', 'TodoMVC: React')
  })

  it('add new todo  ', () => {
    cy.get('[data-testid="text-input"]').type("Neues To-Do").type('{enter}')
    cy.get('[data-testid="todo-item-label"]').should('contain', 'Neues To-Do')
  })

  it('erledigte todo  ', () => {
    cy.get('[data-testid="text-input"]').type("erledigt To-Do").type('{enter}')
    cy.get('[data-testid="todo-item-label"]').should('contain', 'erledigt To-Do')
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-label"]')
  .should('include.text', 'erledigt To-Do')
  .and('have.css', 'text-decoration-line', 'line-through')

  })

  it('zu löschenden todo  ', () => {
    cy.get('[data-testid="text-input"]').type("Zu löschenden To-Do").type('{enter}')
    cy.get('[data-testid="todo-item-label"]').should('contain', 'Zu löschenden To-Do')
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('.clear-completed').click({force: true})
    cy.get('[data-testid="todo-item-label"]').should('not.exist')

  })

  it('bonus2 todo  ', () => {
    cy.get('[data-testid="text-input"]').type("Zustand To-Do").type('{enter}')
    cy.get('[data-testid="todo-item-label"]').should('contain', 'Zustand To-Do')
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').should('have.class', 'selected')
    cy.reload(true)
    cy.get('[data-testid="text-input"]').type("Zustand To-Do").type('{enter}')
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').should('have.class', 'selected')
  })

})  
