import '../../../../cypress/support/commands'
import { CreatePasswordState } from './CreatePasswordState'

describe(`CreatePasswordState`, () => {
  describe(`Initialization`, initializationTests)
  describe(`Password Management`, passwordManagementTests)
  describe(`Tooltip`, tooltipTests)
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
    createPasswordState.setPassword({
      newValue: `password`
    })

    expect(createPasswordState.password)
      .to
      .equal(`password`)
  })

  it(`
  GIVEN existing password
  WHEN setPassword is called with a different value
  SHOULD update password
  `, () => {
    createPasswordState.setPassword({
      newValue: `password1`
    })
    createPasswordState.setPassword({
      newValue: `password2`
    })

    expect(createPasswordState.password)
      .to
      .equal(`password2`)
  })
}

function tooltipTests() {
  let createPasswordState: CreatePasswordState

  beforeEach(() => {
    createPasswordState = new CreatePasswordState()
  })

  it(`
  GIVEN tooltip is hidden
  WHEN setIsTooltipVisible is called 
  SHOULD show tooltip
  `, () => {
    createPasswordState.setIsTooltipVisible()

    expect(createPasswordState.isTooltipVisible)
      .to
      .be
      .true
  })

  it(`
  GIVEN tooltip is visible
  WHEN resetIsTooltipVisible is called
  SHOULD hide tooltip
  `, () => {
    createPasswordState.setIsTooltipVisible()
    createPasswordState.resetIsTooltipVisible()

    expect(createPasswordState.isTooltipVisible)
      .to
      .be
      .false
  })
}