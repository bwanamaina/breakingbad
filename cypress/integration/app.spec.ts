/// <reference types="Cypress" />
describe('<App/> component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should render <Header/> component', () => {
    cy.get('header.center').within(() => {
      cy.get('img').should('have.length', 1);
    });
  });

  it('Should render <Search/> component', () => {
    cy.get('input[type="text"]').should('have.value', '');
  });

  it('Should render <Card/> component', () => {
    cy.get('section.cards').should('have.length', 1);
  });

  it('Should render 8 <Item/> components', () => {
    cy.get('div.card').should('have.length', 8);
  });

  it('Should render <Pagination/> component', () => {
    cy.get('div.pagination').should('have.length', 1);
  });
});
