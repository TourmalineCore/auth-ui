import '../../../../cypress/support/commands'
import { CreatePasswordState } from './CreatePasswordState'


describe(`CreatePasswordState`, () => {
  describe(`Initialization`, initializationTests)
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
