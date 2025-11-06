import '../../../../cypress/support/commands'
import { CreatePasswordState } from './CreatePasswordState'


describe(`CreatePasswordState`, () => {
  describe(`Initialization`, initializationTests)
  describe(`Password Management`, passwordManagementTests)
})

function initializationTests() {
  let createPasswordState: CreatePasswordState

  beforeEach(() => {
    createPasswordState = new CreatePasswordState()
  })

  it(`
  GIVEN CreatePasswordState
  WHEN initialized
  SHOULD have default values
  `, () => {
    expect(createPasswordState.password)
      .to
      .equal(``)
    expect(createPasswordState.isTooltipVisible)
      .to
      .be
      .false
  })
}

function passwordManagementTests() {
  let createPasswordState: CreatePasswordState

  beforeEach(() => {
    createPasswordState = new CreatePasswordState()
  })

  it(`
  GIVEN empty password
  WHEN setPassword is called with new value
  SHOULD update password
  `, () => {
    createPasswordState.setPassword('password')

    expect(createPasswordState.password)
      .to
      .equal('password')
  })

  it(`
  GIVEN existing password
  WHEN setPassword is called with a different value
  SHOULD update password
  `, () => {
    createPasswordState.setPassword('password1')
    createPasswordState.setPassword('password2')

    expect(createPasswordState.password)
      .to
      .equal('password2')
  })
}
