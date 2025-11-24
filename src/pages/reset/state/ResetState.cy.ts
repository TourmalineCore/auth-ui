import '../../../../cypress/support/commands'
import { ResetState } from './ResetState'


describe(`ResetState`, () => {
  describe(`Initialization`, initializationTests)
  describe(`Login Management`, loginManagementTests)
 
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

  function loginManagementTests() {
    let resetState: ResetState

    beforeEach(() => {
      resetState = new ResetState()
    })

    it(`
    GIVEN empty login
    WHEN setLogin is called with a new value
    SHOULD update login
    `, () => {
      resetState.setLogin({
        newValue: `test@tc.com`,
      })

      expect(resetState.login).to.equal('test@tc.com')
    })

    it(`
    GIVEN existing login
    WHEN setLogin is called with a different value
    SHOULD update login to this value
    `, () => {
      resetState.setLogin({
        newValue: `test@tc.com`,
      })

      resetState.setLogin({
        newValue: `test2@tc.com`,
      })

      expect(resetState.login).to.equal('test2@tc.com')
    })
  }
