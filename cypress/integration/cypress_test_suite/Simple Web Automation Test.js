/// <reference types="cypress" />

context('Simple Web Automation Test(CRUD)', () => {
  beforeEach(() => {
    cy.visit('http://35.234.31.120:8081')
  })

  it('1. Delete - Remove all Tutorials', () => {
    cy.get('.m-3').click()
  })

  it('2. Add - Add Tutorial', () => {
    cy.get(':nth-child(2) > .nav-link')
    .click()
    cy.get('#title')
    .type('Web Automation Test')
    cy.get('#description')
    .type('Cypress Rocks!')
    cy.get('.btn')
    .click()
  })

  it('3. Search - Inquiry a Tutorial Tile', () => {
    cy.get('input.form-control')
    .type('Cypress Testing')
    cy.get('button.btn.btn-outline-secondary')
    .click()
    cy.get('input.form-control')
    .clear()
    cy.get('input.form-control')
      .type('Web Automation Test')
    cy.get('button.btn.btn-outline-secondary')
      .click()
    cy.get('.list-group-item')
      .click()
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2)').should('have.text', 'Title: Web Automation Test')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(3)').should('have.text', 'Description: Cypress Rocks!')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(4)').should('have.text', 'Status: Pending')
  })

  it('4. Update - Publish a Tutorial', () => {
    cy.get('input.form-control')
    .type('Web Automation Test')
    cy.get('button.btn.btn-outline-secondary')
    .click()
    cy.get('.list-group-item')
    .click()
    cy.get('.badge')
    .click()
    cy.get('.badge-primary')
    .click()
    cy.get('form > :nth-child(3)').should('have.text', 'Status:Published')
    cy.get('.navbar-brand')
    .click()
    cy.get('.list-group-item')
      .click()
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2)').should('have.text', 'Title: Web Automation Test')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(3)').should('have.text', 'Description: Cypress Rocks!')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(4)').should('have.text', 'Status: Published')
  })

})
