import { makeAutoObservable } from 'mobx'

export class ResetState {
  private _login = ''
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
    newValue,
  }: {
    newValue: string,
  }) {
    this._login = newValue
  }

  setIsSuccessful() {
    this._isSuccessful = true
  }

  resetIsSuccessful() {
    this._isSuccessful = false
  }
}
