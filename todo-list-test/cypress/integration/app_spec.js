/// <reference types="cypress"/>
import '@testing-library/cypress/add-commands';

describe('Habit Tracker', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('등록', () => {
    cy.findByPlaceholderText('해야할 일을 입력하세요').type('New Todo');
    cy.findByText('Add').click();
    cy.findAllByTestId('todo').last().should('have.text', 'New Todo');
  });

  it('삭제', () => {
    cy.findAllByTitle('삭제').first().click();
    cy.findAllByTestId('todo').findByText('Learn React').should('not.exist');
  });
});
