import { makeAutoObservable } from 'mobx'

export interface AuthFormData {
  login: string,
  password: string,
}

export class AuthState {
  private _formData: AuthFormData = {
    login: ``,
    password: ``,
  }
  private _errorMessage = ``

  constructor() {
    makeAutoObservable(this)
  }

  get formData() {
    return this._formData
  }

  get errorMessage() {
    return this._errorMessage
  }

  get isFormValid() {
    return this._formData.login !== `` && this._formData.password !== ``
  }

  setFormData(newValue: Partial<AuthFormData>) {
    this._formData = {
      ...this._formData,
      ...newValue,
    }
  }

  setErrorMessage(newValue: string) {
    this._errorMessage = newValue
  }

  resetPassword() {
    this._formData.password = ``
  }
}