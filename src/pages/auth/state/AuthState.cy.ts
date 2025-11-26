import '../../../../cypress/support/commands'
import { AuthState } from './AuthState'

describe(`AuthState`, () => {
  describe(`Initialization`, initializationTests)
  describe(`Form Data`, formDataTests)
  describe(`Form Validation`, formValidationTests)
  describe(`Error Message`, errorMessageTests)
  describe(`Reset`, resetTests)
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

function formDataTests() {
  const authState = new AuthState()
  
  it(`
  GIVEN AuthState
  WHEN setFormData is called
  SHOULD update form data
  `, () => {
    authState.setFormData({ 
      formData: {
        login: `test@example.com`,
        password: `123`,
      } 
    })
    
    expect(authState.formData.login)
      .to
      .equal(`test@example.com`)
    expect(authState.formData.password)
      .to
      .equal(`123`)
  })
}

function formValidationTests() {
  const authState = new AuthState()

  it(`
  GIVEN AuthState
  WHEN form is empty
  SHOULD return false
  `, () => {
    expect(authState.isFormValid)
      .to
      .be
      .false
  })

  it(`
  GIVEN AuthState
  WHEN only login field is filled
  SHOULD return false
  `, () => {
    authState.setFormData({ 
      formData: {
        login: `test@example.com`, 
      }
    })
    expect(authState.isFormValid)
      .to
      .be
      .false
  })
  
  it(`
  GIVEN AuthState
  WHEN only both login and password are filled
  SHOULD return true
  `, () => {
    authState.setFormData({ 
      formData: {
        login: `test@example.com`, 
        password: `123`, 
      }
    })
    expect(authState.isFormValid)
      .to
      .be
      .true
  })
}

function errorMessageTests() {
  const authState = new AuthState()

  it(`
  GIVEN AuthState
  WHEN pass errorMessage
  SHOULD set errorMessage
  `, () => {
    const errorMessage = `Invalid credentials`
    authState.setErrorMessage({
      errorMessage: errorMessage
    })
    
    expect(authState.errorMessage)
      .to
      .equal(errorMessage)
  })
}

function resetTests() {
  const authState = new AuthState()

  it(`
  GIVEN AuthState
  WHEN reset password
  SHOULD have empty string for password in state
  `, () => {
    authState.setFormData({ 
      formData: {
        login: `test@example.com`, 
        password: `123`,
      }
    })

    authState.resetPassword()
    
    expect(authState.formData.login)
      .to
      .equal(`test@example.com`)
    expect(authState.formData.password)
      .to
      .equal(``)
  })
}