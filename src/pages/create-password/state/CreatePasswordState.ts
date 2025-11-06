import { makeAutoObservable } from 'mobx'

export class CreatePasswordState {
  private _password = ``
  private _isTooltipVisible = false

  constructor() {
    makeAutoObservable(this)
  }

  get password() {
    return this._password
  }

  get isTooltipVisible() {
    return this._isTooltipVisible
  }

  setPassword(newValue: string) {
    this._password = newValue
  }
}