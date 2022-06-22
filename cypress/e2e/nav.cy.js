import dataCyValues from '@/constants/dataCyValues';

describe('Calculator', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
});

describe('Navigation', () => {
  it('check routes', () => {
    cy.get(`[data-cy=${dataCyValues.home}]`).should('exist');
    cy.get(`[data-cy=${dataCyValues.settings}]`).should('not.exist');
    cy.visit('/settings');
    cy.get(`[data-cy=${dataCyValues.home}]`).should('not.exist');
    cy.get(`[data-cy=${dataCyValues.settings}]`).should('exist');
  });
});