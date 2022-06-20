describe('Calculator', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
});

describe('Checks operations', () => {
  it('check sum operator', () => {
    cy.get('[data-cy="8"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '8',
    );
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '+',
    );
    cy.get('[data-cy="output"]').should(
      'have.text',
      '8+',
    );
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '2',
    );
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '10',
    );
    cy.get('[data-cy="0h"]').should(
      'have.text',
      '8 + 2',
    );
  });

  it('check sub operator', () => {
    cy.get('[data-cy="CE"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '0',
    );
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '30',
    );
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '-',
    );
    cy.get('[data-cy="output"]').should(
      'have.text',
      '30-',
    );
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '5',
    );
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '25',
    );
    cy.get('[data-cy="1h"]').should(
      'have.text',
      '30 - 5',
    );
  });

  it('checks mul operator', () => {
    cy.get('[data-cy="C"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '0',
    );
    cy.get('[data-cy="6"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '6',
    );
    cy.get('[data-cy="*"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '*',
    );
    cy.get('[data-cy="output"]').should(
      'have.text',
      '6*',
    );
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '10',
    );
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '60',
    );
    cy.get('[data-cy="2h"]').should(
      'have.text',
      '6 * 10',
    );
  });

  it('checks div operator', () => {
    cy.get('[data-cy="C"]').click();
    cy.get('[data-cy="7"]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '75',
    );
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '/',
    );
    cy.get('[data-cy="output"]').should(
      'have.text',
      '75/',
    );
    cy.get('[data-cy="6"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '6',
    );
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '12.5',
    );
    cy.get('[data-cy="3h"]').should(
      'have.text',
      '75 / 6',
    );
  });

  it('checks rest operator', () => {
    cy.get('[data-cy="C"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="6"]').click();
    cy.get('[data-cy="8"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '368',
    );
    cy.get('[data-cy="%"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '%',
    );
    cy.get('[data-cy="output"]').should(
      'have.text',
      '368%',
    );
    cy.get('[data-cy="7"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '7',
    );
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '4',
    );
    cy.get('[data-cy="4h"]').should(
      'have.text',
      '368 % 7',
    );
  });

  it('checks +/- operator', () => {
    cy.get('[data-cy="C"]').click();
    cy.get('[data-cy="7"]').click();
    cy.get('[data-cy="+/-"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '-7',
    );
  });

  it('checks () operator', () => {
    cy.get('[data-cy="C"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="*"]').click();
    cy.get('[data-cy="("]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '( ',
    );
    cy.get('[data-cy="output"]').should(
      'have.text',
      '2*',
    );
    cy.get('[data-cy="8"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="9"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '( 8 + 9',
    );
    cy.get('[data-cy=")"]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '17',
    );
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="currentOutput"]').should(
      'have.text',
      '34',
    );
    cy.get('[data-cy="5h"]').should(
      'have.text',
      '2 * (8 + 9)',
    );
  });
});
