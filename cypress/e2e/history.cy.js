describe('Calculator', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
});

describe('History', () => {
  it('check history saving', () => {
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="0h"]').should(
      'have.text',
      '5 + 1',
    );
    cy.visit('/');
    cy.get('[data-cy="0h"]').should(
      'have.text',
      '5 + 1',
    );
  });

  it('check history visibility', () => {
    cy.get('[data-cy="history"]').should('exist');
    cy.get('[data-cy="showHistory"]').should('not.exist');
    cy.get('[data-cy="hideHistory"]').click();
    cy.get('[data-cy="history"]').should('not.exist');
    cy.get('[data-cy="showHistory"]').should('exist');
  });
});