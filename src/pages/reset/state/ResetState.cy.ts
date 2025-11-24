import '../../../../cypress/support/commands'
import { ResetState } from './ResetState'


describe(`ResetState`, () => {
  describe(`Initialization`, initializationTests)
 
})


function initializationTests() {
  let resetState: ResetState

  beforeEach(() => {
    resetState = new ResetState()
  })

  it(`
  GIVEN a new ResetState
  WHEN initialized
  SHOULD have default values
  `, () => {
    expect(resetState.login)
      .to
      .equal('')
    expect(resetState.isSuccessful)
      .to
      .be
      .false
  })
}
