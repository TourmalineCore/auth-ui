import '../../../../cypress/support/commands'
import { ResetState } from './ResetState'

describe(`ResetState`, () => {
  describe(`Initialization`, initializationTests)
  describe(`Login Management`, loginManagementTests)
  describe(`Successful State Management`, successfulStateTests)
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
      .equal(``)
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

    expect(resetState.login)
      .to
      .equal(`test@tc.com`)
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

    expect(resetState.login)
      .to
      .equal(`test2@tc.com`)
  })
}

function successfulStateTests() {
  let resetState: ResetState

  beforeEach(() => {
    resetState = new ResetState()
  })

  it(`
  GIVEN default isSuccessful is false
  WHEN setIsSuccessful is called
  SHOULD update isSuccessful to true
  `, () => {
    resetState.setIsSuccessful()

    expect(resetState.isSuccessful)
      .to
      .be
      .true
  })

  it(`
  GIVEN isSuccessful is true
  WHEN resetIsSuccessful is called
  SHOULD update isSuccessful to false
  `, () => {
    resetState.setIsSuccessful()
    resetState.resetIsSuccessful()

    expect(resetState.isSuccessful)
      .to
      .be
      .false
  })
}