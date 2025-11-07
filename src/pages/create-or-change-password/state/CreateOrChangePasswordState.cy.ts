import '../../../../cypress/support/commands'
import { CreateOrChangePasswordState } from './CreateOrChangePasswordState'

describe(`CreateOrChangePasswordState`, () => {
  describe(`Initialization`, initializationTests)
  describe(`Password Management`, passwordManagementTests)
  describe(`Tooltip`, tooltipTests)
})

function initializationTests() {
  let createOrChangePasswordState: CreateOrChangePasswordState

  beforeEach(() => {
    createOrChangePasswordState = new CreateOrChangePasswordState()
  })

  it(`
  GIVEN CreateOrChangePasswordState
  WHEN initialized
  SHOULD have default values
  `, () => {
    expect(createOrChangePasswordState.password)
      .to
      .equal(``)
    expect(createOrChangePasswordState.isTooltipVisible)
      .to
      .be
      .false
  })
}

function passwordManagementTests() {
  let createOrChangePasswordState: CreateOrChangePasswordState

  beforeEach(() => {
    createOrChangePasswordState = new CreateOrChangePasswordState()
  })

  it(`
  GIVEN empty password
  WHEN setPassword is called with new value
  SHOULD update password
  `, () => {
    createOrChangePasswordState.setPassword({
      newValue: `password`,
    })

    expect(createOrChangePasswordState.password)
      .to
      .equal(`password`)
  })

  it(`
  GIVEN existing password
  WHEN setPassword is called with a different value
  SHOULD update password
  `, () => {
    createOrChangePasswordState.setPassword({
      newValue: `password1`,
    })
    createOrChangePasswordState.setPassword({
      newValue: `password2`,
    })

    expect(createOrChangePasswordState.password)
      .to
      .equal(`password2`)
  })
}

function tooltipTests() {
  let createOrChangePasswordState: CreateOrChangePasswordState

  beforeEach(() => {
    createOrChangePasswordState = new CreateOrChangePasswordState()
  })

  it(`
  GIVEN tooltip is hidden
  WHEN setIsTooltipVisible is called 
  SHOULD show tooltip
  `, () => {
    createOrChangePasswordState.setIsTooltipVisible()

    expect(createOrChangePasswordState.isTooltipVisible)
      .to
      .be
      .true
  })

  it(`
  GIVEN tooltip is visible
  WHEN resetIsTooltipVisible is called
  SHOULD hide tooltip
  `, () => {
    createOrChangePasswordState.setIsTooltipVisible()
    createOrChangePasswordState.resetIsTooltipVisible()

    expect(createOrChangePasswordState.isTooltipVisible)
      .to
      .be
      .false
  })
}