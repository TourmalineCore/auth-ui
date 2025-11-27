import { makeAutoObservable } from 'mobx'

export class ResetState {
  private _login = ``
  private _isSuccessful = false

  constructor() {
    makeAutoObservable(this)
  }

  get login() {
    return this._login
  }

  get isSuccessful() {
    return this._isSuccessful
  }

  setLogin({
    login,
  }: {
    login: string,
  }) {
    this._login = login
  }

  setIsSuccessful() {
    this._isSuccessful = true
  }

  resetIsSuccessful() {
    this._isSuccessful = false
  }
}
