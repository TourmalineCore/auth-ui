import '../../../../cypress/support/commands'
import { AuthState } from './AuthState'

describe(`AuthState`, () => {
  describe(`Initialization`, initializationTests)
  describe(`Form Data`, FormDataTests)
  describe(`Form Validation`, FormValidationTests)
  describe(`Error Message`, ErrorMessageTests)
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

function FormDataTests() {
  const authState = new AuthState()
  
  it(`
  GIVEN AuthState
  WHEN setFormData is called
  SHOULD update form data
  `, () => {
    authState.setFormData({ 
      login: 'test@example.com',
      password: '123' 
    })
    
    expect(authState.formData.login)
      .to
      .equal('test@example.com')
    expect(authState.formData.password)
      .to
      .equal('123')
  })
}

function FormValidationTests() {
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
      login: 'test@example.com' 
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
      login: 'test@example.com', 
      password: '123' 
    })
    expect(authState.isFormValid)
      .to
      .be
      .true
  })
}}

function ErrorMessageTests() {
  const authState = new AuthState()

  it(`
  GIVEN AuthState
  WHEN pass errorMessage
  SHOULD set errorMessage
  `, () => {
    const errorMessage = 'Invalid credentials'
    authState.setErrorMessage(errorMessage)
    
    expect(authState.errorMessage).to.equal(errorMessage)
  })
}
