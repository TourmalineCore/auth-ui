import { makeAutoObservable } from 'mobx'

export class CreateOrChangePasswordState {
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

  setPassword({
    newValue,
  }: {
    newValue: string,
  }) {
    this._password = newValue
  }

  setIsTooltipVisible() {
    this._isTooltipVisible = true
  }

  resetIsTooltipVisible() {
    this._isTooltipVisible = false
  }
}