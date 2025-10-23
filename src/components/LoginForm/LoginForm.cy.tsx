import { LoginForm } from "./LoginForm"

describe(`LoginForm`, () => {
  it(`
  GIVEN LoginForm with title, subtitle, email and disabled button
  WHEN mounted
  SHOULD render all props correctly
  `, () => {
    mountComponent()

    cy.getByData(`login-form-title`)
      .should(`have.text`, `Welcome`)
    cy.getByData(`login-form-subtitle`)
      .should(`contain.text`, `Please log in`)
    cy.getByData(`login-form-email`)
      .should(`contain.text`, `test@example.com`)
    cy.getByData(`login-form-submit`)
      .should(`be.disabled`)
    cy.get(`input`)
      .should(`exist`)
  })
})

function mountComponent() {
  cy.mount(
    <LoginForm
      title="Welcome"
      subtitle="Please log in"
      email="test@example.com"
      buttonText="Sign In"
      buttonDisabled={true}
      onSubmit={() => {}}
    >
      <input placeholder="Email" />
    </LoginForm>,
  )
}
