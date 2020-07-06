/// <reference types="Cypress" />
import data from '../../src/data';

describe('<Search/> component', () => {
  const character = data[0].name;

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should autoFocus on mount', () => {
    cy.focused()
      .should('be.visible')
      .and('have.class', '')
      .and('have.attr', 'placeholder', 'Search characters')
      .and('have.attr', 'type', 'text');
  });

  it('Should accept inputs', () => {
    cy.get('input[type="text"]')
      .type(character)
      .should('have.value', character);
  });

  it('Should filter characters', () => {
    cy.get('input[type="text"]').type(character);
    cy.get('div.card').should('have.length', 1);
  });
});
