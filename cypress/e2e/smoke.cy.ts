describe(`Auth Flow E2E`, () => {
  it(`
  GIVEN user is on the Auth page
  WHEN enters invalid email and password
  SHOULD see error message
  WHEN enters valid email and invalid password
  SHOULD see error message
  WHEN enters valid email and valid password
  SHOULD be redirected from the Auth page
  WHEN visits the logout page
  SHOULD be redirected back to the Auth page
  `, () => {
    cy.visit(`/auth`)

    cy.getByData(`login-input`)
      .type(`wrong@tourmalinecore.com`)

    cy.getByData(`password-input`)
      .type(`wrongpassword`)

    cy.getByData(`submit-button`)
      .click()

    cy.contains(`Error: Invalid email or password`)
      .should(`be.visible`)

    cy.getByData(`login-input`)
      .clear()
      .type(Cypress.env(`USER_LOGIN`))

    cy.getByData(`password-input`)
      .type(`wrongpassword`)

    cy.getByData(`submit-button`)
      .click()

    cy.contains(`Error: Invalid email or password`)
      .should(`be.visible`)
    
    cy.getByData(`password-input`)
      .clear()
      .type(Cypress.env(`USER_PASSWORD`))

    cy.getByData(`submit-button`)
      .click()

    cy.window()
      .its(`location.href`)
      .should(`not.include`, `/auth`)

    cy.visit(`/auth/logout`)

    cy.url()
      .should(`include`, `/auth`)
  })
})
