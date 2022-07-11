import {
  getAddGreenAppleButton,
  getAddOneAppleButton,
  getAddRedAppleButton,
  getApples,
  getAppTitle,
  getGreenApples,
  getRedApples,
  getRemoveGreenApplesButton,
  getRemoveRedApplesButton,
} from '../support/app.po'
import * as fix from '../support/mocks'

describe('apples', () => {
  beforeEach(() => {
    cy.fixture('apples-data.mock.json')
      .as('apples-1')
      .then((r) => {
        cy.intercept('GET', '/apples-api', r.fetchApples.list)
      })
      .as('getInitialApples')
  })

  beforeEach(() => {
    cy.visit('/')
    cy.wait('@getInitialApples')
  })

  it('should display Welcome to apples! title', () => {
    getAppTitle().contains('Welcome to apples!')
  })

  it('should display apples', () => {
    fix.randomApple()
    getApples().should('have.length', 2)
    getAddOneAppleButton().click()
    cy.wait('@addOneApple')
    getApples().should('have.length', 3)
  })

  it('should display red apples', () => {
    fix.addApple('red')
    getRedApples().should('have.length', 1)
    getAddRedAppleButton().click()
    cy.wait('@addApple')
    getRedApples().should('have.length', 2)
  })

  it('should display green apples', () => {
    fix.addApple('green')
    getGreenApples().should('have.length', 1)
    getAddGreenAppleButton().click()
    cy.wait('@addApple')
    getGreenApples().should('have.length', 2)
  })

  it('should remove red apples', () => {
    fix.removeApples('red')
    getRedApples().should('have.length', 1)
    getRemoveRedApplesButton().click()
    cy.wait('@removeApples')
    getRedApples().should('have.length', 0)
  })

  it('should remove green apples', () => {
    fix.removeApples('green')
    getGreenApples().should('have.length', 1)
    getRemoveGreenApplesButton().click()
    cy.wait('@removeApples')
    getGreenApples().should('have.length', 0)
  })
})
