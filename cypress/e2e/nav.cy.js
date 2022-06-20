describe('Calculator', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
});

describe('Navigation', () => {
  it('check routes', () => {
    cy.get('[data-cy="home"]').should('exist');
    cy.get('[data-cy="setting"]').should('not.exist');
    cy.visit('/settings');
    cy.get('[data-cy="home"]').should('not.exist');
    cy.get('[data-cy="setting"]').should('exist');
  });
});