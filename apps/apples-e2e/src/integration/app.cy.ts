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
} from '../support/app.po';

describe('apples', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Welcome to apples! title', () => {
    getAppTitle().contains('Welcome to apples!');
  });

  it('should display apples', () => {
    getApples().should('have.length', 2);
    getAddOneAppleButton().click();
    getApples().should('have.length', 3);
  });

  it('should display red apples', () => {
    getRedApples().should('have.length', 1);
    getAddRedAppleButton().click();
    getRedApples().should('have.length', 2);
  });

  it('should display green apples', () => {
    getGreenApples().should('have.length', 1);
    getAddGreenAppleButton().click();
    getGreenApples().should('have.length', 2);
  });

  it('should remove red apples', () => {
    getRedApples().should('have.length', 1);
    getRemoveRedApplesButton().click();
    getRedApples().should('have.length', 0);
  });

  it('should remove green apples', () => {
    getGreenApples().should('have.length', 1);
    getRemoveGreenApplesButton().click();
    getGreenApples().should('have.length', 0);
  });
});
