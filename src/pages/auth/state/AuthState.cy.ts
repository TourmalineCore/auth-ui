import '../../../../cypress/support/commands'
import { AuthState } from './AuthState'

describe(`AuthState`, () => {
  describe(`Initialization`, initializationTests)
})

function initializationTests() {
  const authState = new AuthState()
  
  it(`
  GIVEN AuthState
  WHEN initialize
  SHOULD have default values
  `, () => {
    expect(authState.formData)
      .to
      .deep
      .equal({
        login: ``,
        password: ``,
      })
    expect(authState.errorMessage)
      .to
      .equal(``)
  })
}
