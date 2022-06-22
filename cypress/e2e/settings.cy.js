import dataCyValues from '@/constants/dataCyValues';

describe('Calculator', () => {
  it('successfully loads', () => {
    cy.visit('/settings');
  });
});

describe('Settings', () => {
  it('check switching theme', () => {
    cy.get(`[data-cy=${dataCyValues.selectTheme}]`)
      .should('have.value', 'Light Theme');
    cy.get(`[data-cy=${dataCyValues.selectTheme}]`)
      .select('Dark Theme')
      .should('have.value', 'Dark Theme');
    cy.visit('/settings');
    cy.get(`[data-cy=${dataCyValues.selectTheme}]`)
      .should('have.value', 'Dark Theme');
    cy.get(`[data-cy=${dataCyValues.selectTheme}]`)
      .select('Colored Theme')
      .should('have.value', 'Colored Theme');
    cy.visit('/settings');
    cy.get(`[data-cy=${dataCyValues.selectTheme}]`)
      .should('have.value', 'Colored Theme');
  });

  it('check clear history button', () => {
    cy.visit('/');
    cy.get('[data-cy="7"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="0h"]').should(
      'have.text',
      '7 + 1',
    );
    cy.visit('/settings');
    cy.get(`[data-cy=${dataCyValues.clearHistory}]`).click();
    cy.visit('/');
    cy.get('[data-cy="0h"]').should('not.exist');
  });
});
