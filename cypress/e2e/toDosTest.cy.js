import toDosPage from "../pages/toDosPage";

describe('template spec', () => {
    beforeEach(() => {
        toDosPage.visit();
  });

  it('verify page title launch the website url ', () => {
    cy.title().should('eq', 'TodoMVC: React')
  })

  it('verify page title launch the website title ', () => {
    cy.get(toDosPage.toDosHeader).contains('todos')
  })

  it('add new todo', () => {
    toDosPage.addNewToDos("Neues To-Do")
  })

  it('set completed Status to todo  ', () => {
    toDosPage.addNewToDos("Zu erledigendes To-Do")
    cy.get(toDosPage.toDosItemToogle).click()
    cy.get(toDosPage.toDosItemLabel)
      .should('include.text', 'Zu erledigendes To-Do')
      .and('have.css', 'text-decoration-line', 'line-through')
  })

  it('remove todo  ', () => {
    toDosPage.addNewToDos("Zu löschenden To-Do")
    cy.get(toDosPage.toDosItemToogle).click()
    cy.get(toDosPage.toDosClearCompletedBtn).click({force: true})
    cy.get(toDosPage.toDosItemLabel).should('not.exist')
  }) 
  
  it('check status from todo  ', () => {
    toDosPage.addNewToDos("Zustand To-Do")
    cy.get(toDosPage.toDosCompletedBtn).click()
    cy.get(toDosPage.toDosCompletedBtn).should('have.class', 'selected')
    cy.reload(true)
    cy.get(toDosPage.toDosInputField).type("Zustand To-Do").type('{enter}')
    cy.get(toDosPage.toDosCompletedBtn).should('have.class', 'selected')
  })
})