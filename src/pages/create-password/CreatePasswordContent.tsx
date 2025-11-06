import { observer } from 'mobx-react-lite'
import { ChangeEvent, FormEvent, useContext } from 'react'
import { clsx } from 'clsx'
import { CreatePasswordStateContext } from './state/CreatePasswordStateContext'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import { InputPassword } from '../../components/Input/InputPassword'
import { Tooltip } from '../../components/Tooltip/Tooltip'
import './CreatePasswordPage.scss'

export const CreatePasswordContent = observer(({
  handleFormSubmit,
  login,
  validation,
}: {
  handleFormSubmit: (event: FormEvent<HTMLFormElement>) => unknown
  login: string | null
  validation: {
    minLenght: boolean
    isContainsNumber: boolean
    isContainsUppercaseLetter: boolean
    isContainsLowercaseLetter: boolean
    isContainsSpecialCharacters: boolean
    isValid: boolean
  }
}) => {
  const createPasswordState = useContext(CreatePasswordStateContext)

  return (
    <div className="background-img-page create-password-page">
      <LoginForm
        onSubmit={handleFormSubmit}
        buttonText="Login"
        buttonDisabled={validation.isValid}
        title="Sign in"
        subtitle="Create a password for"
        email={login}
      >
        <div className="create-password-page__inner">
          <InputPassword
            id="password"
            type="password"
            label="Create password"
            className="create-password-page__input"
            value={createPasswordState.password}
            onChange={
              (event: ChangeEvent<HTMLInputElement>) => createPasswordState
                .setPassword(event.target.value)
            }
            onFocus={() => createPasswordState.setIsTooltipVisible()}
            onBlur={() => createPasswordState.resetIsTooltipVisible()}
            autoComplete="off"
          />

          {(createPasswordState.isTooltipVisible || createPasswordState.password) && validation.isValid && (
            <Tooltip className="create-password-page__tooltip">
              <ul className="create-password-page__required-list">
                <li className={clsx('create-password-page__validation-item', {
                  'create-password-page__validation-item--valid': validation.minLenght, 
                })}>
                  <span className="create-password-page__checkbox">
                    {validation.minLenght && <span className="create-password-page__checkmark" />}
                  </span>
                  <span>Minimum of 8 characters</span>
                </li>
                <li className={clsx('create-password-page__validation-item', {
                  'create-password-page__validation-item--valid': validation.isContainsUppercaseLetter, 
                })}>
                  <span className="create-password-page__checkbox">
                    {validation.isContainsUppercaseLetter && <span className="create-password-page__checkmark" />}
                  </span>
                  <span>Contains an uppercase letter</span>
                </li>
                <li className={clsx('create-password-page__validation-item', {
                  'create-password-page__validation-item--valid': validation.isContainsLowercaseLetter, 
                })}>
                  <span className="create-password-page__checkbox">
                    {validation.isContainsLowercaseLetter && <span className="create-password-page__checkmark" />}
                  </span>
                  <span>Contains an lowercase letter</span>
                </li>
                <li className={clsx('create-password-page__validation-item', {
                  'create-password-page__validation-item--valid': validation.isContainsNumber, 
                })}>
                  <span className="create-password-page__checkbox">
                    {validation.isContainsNumber && <span className="create-password-page__checkmark" />}
                  </span>
                  <span>Contains a number (0-9)</span>
                </li>
                <li className={clsx('create-password-page__validation-item', {
                  'create-password-page__validation-item--valid': validation.isContainsSpecialCharacters, 
                })}>
                  <span className="create-password-page__checkbox">
                    {validation.isContainsSpecialCharacters && <span className="create-password-page__checkmark" />}
                  </span>
                  <span>Contains a special symbol</span>
                </li>
              </ul>
            </Tooltip>
          )}
        </div>

      </LoginForm>
    </div>
  )
})