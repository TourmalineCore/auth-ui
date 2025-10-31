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
}