import { observer } from 'mobx-react-lite'
import { ChangeEvent, FormEvent, useContext } from 'react'
import { clsx } from 'clsx'
import { CreateOrChangePasswordStateContext } from './state/CreateOrChangePasswordStateContext'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import { InputPassword } from '../../components/Input/InputPassword'
import { Tooltip } from '../../components/Tooltip/Tooltip'
import './CreateOrChangePasswordPage.scss'

export const CreateOrChangePasswordContent = observer(({
  handleFormSubmit,
  login,
  validation,
}: {
  handleFormSubmit: (event: FormEvent<HTMLFormElement>) => unknown,
  login: string | null,
  validation: {
    minLenght: boolean,
    isContainsNumber: boolean,
    isContainsUppercaseLetter: boolean,
    isContainsLowercaseLetter: boolean,
    isContainsSpecialCharacters: boolean,
    isValid: boolean,
  },
}) => {
  const createOrChangePasswordState = useContext(CreateOrChangePasswordStateContext)

  const { 
    isChangeMode, 
    password,
    isTooltipVisible,
  } = createOrChangePasswordState

  return (
    <div className="background-img-page create-or-change-password-page">
      <LoginForm
        onSubmit={handleFormSubmit}
        buttonText={isChangeMode ? `Done` : `Login`}
        buttonDisabled={validation.isValid}
        title={isChangeMode ? `Change password` : `Sign in`}
        subtitle={isChangeMode ? `Create a new password for` : `Create a password for`}
        email={login}
      >
        <div className="create-or-change-password-page__inner">
          <InputPassword
            id="password"
            type="password"
            label="Create password"
            className="create-or-change-password-page__input"
            value={password}
            onChange={
              (event: ChangeEvent<HTMLInputElement>) => createOrChangePasswordState
                .setPassword({
                  newValue: event.target.value,
                })
            }
            onFocus={() => createOrChangePasswordState.setIsTooltipVisible()}
            onBlur={() => createOrChangePasswordState.resetIsTooltipVisible()}
            autoComplete="off"
          />

          {(isTooltipVisible || password) && validation.isValid && (
            <Tooltip className="create-or-change-password-page__tooltip">
              <ul className="create-or-change-password-page__required-list">
                <li className={clsx(`create-or-change-password-page__validation-item`, {
                  'create-or-change-password-page__validation-item--valid': validation.minLenght, 
                })}>
                  <span className="create-or-change-password-page__checkbox">
                    {validation.minLenght && <span className="create-or-change-password-page__checkmark" />}
                  </span>
                  <span>Minimum of 8 characters</span>
                </li>
                <li className={clsx(`create-or-change-password-page__validation-item`, {
                  'create-or-change-password-page__validation-item--valid': validation.isContainsUppercaseLetter, 
                })}>
                  <span className="create-or-change-password-page__checkbox">
                    {validation.isContainsUppercaseLetter && <span className="create-or-change-password-page__checkmark" />}
                  </span>
                  <span>Contains an uppercase letter</span>
                </li>
                <li className={clsx(`create-or-change-password-page__validation-item`, {
                  'create-or-change-password-page__validation-item--valid': validation.isContainsLowercaseLetter, 
                })}>
                  <span className="create-or-change-password-page__checkbox">
                    {validation.isContainsLowercaseLetter && <span className="create-or-change-password-page__checkmark" />}
                  </span>
                  <span>Contains an lowercase letter</span>
                </li>
                <li className={clsx(`create-or-change-password-page__validation-item`, {
                  'create-or-change-password-page__validation-item--valid': validation.isContainsNumber, 
                })}>
                  <span className="create-or-change-password-page__checkbox">
                    {validation.isContainsNumber && <span className="create-or-change-password-page__checkmark" />}
                  </span>
                  <span>Contains a number (0-9)</span>
                </li>
                <li className={clsx(`create-or-change-password-page__validation-item`, {
                  'create-or-change-password-page__validation-item--valid': validation.isContainsSpecialCharacters, 
                })}>
                  <span className="create-or-change-password-page__checkbox">
                    {validation.isContainsSpecialCharacters && <span className="create-or-change-password-page__checkmark" />}
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