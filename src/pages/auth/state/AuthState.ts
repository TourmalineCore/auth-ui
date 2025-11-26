import { makeAutoObservable } from 'mobx'

export type AuthFormData = {
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

  setFormData({ 
    formData 
  }: { 
    formData: Partial<AuthFormData>
  }) {
    this._formData = {
      ...this._formData,
      ...formData,
    }
  }

  setErrorMessage({
    errorMessage
  }: {
    errorMessage: string
  }) {
    this._errorMessage = errorMessage
  }

  resetPassword() {
    this._formData.password = ``
  }
}