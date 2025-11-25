import './CreateOrChangePasswordPage.scss'

import { observer } from 'mobx-react-lite'
import { ChangeEvent, FormEvent, useContext } from 'react'
import { clsx } from 'clsx'
import { useValidation } from '../../common/hooks/useValidation'
import { CreateOrChangePasswordStateContext } from './state/CreateOrChangePasswordStateContext'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import { InputPassword } from '../../components/Input/InputPassword'
import { Tooltip } from '../../components/Tooltip/Tooltip'

export const CreateOrChangePasswordContent = observer(({
  handleFormSubmit,
  login,
}: {
  handleFormSubmit: (event: FormEvent<HTMLFormElement>) => unknown,
  login: string | null,
}) => {
  const createOrChangePasswordState = useContext(CreateOrChangePasswordStateContext)

  const { 
    isChangeMode, 
    password,
    isTooltipVisible,
  } = createOrChangePasswordState

  const {
    minLenght,
    isContainsNumber,
    isContainsUppercaseLetter,
    isContainsLowercaseLetter,
    isContainsSpecialCharacters,
    isValid,
  } = useValidation(createOrChangePasswordState.password, {
    minLenght: 8,
    isContainsNumber: true,
    isContainsUppercaseLetter: true,
    isContainsLowercaseLetter: true,
    isContainsSpecialCharacters: true,
  })
    
  return (
    <div className="background-img-page create-or-change-password-page">
      <LoginForm
        onSubmit={handleFormSubmit}
        buttonText={isChangeMode ? `Done` : `Login`}
        buttonDisabled={isValid}
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

          {(isTooltipVisible || password) && isValid && (
            <Tooltip className="create-or-change-password-page__tooltip">
              <ul className="create-or-change-password-page__required-list">
                <li className={clsx(`create-or-change-password-page__validation-item`, {
                  'create-or-change-password-page__validation-item--valid': minLenght, 
                })}>
                  <span className="create-or-change-password-page__checkbox">
                    {minLenght && <span className="create-or-change-password-page__checkmark" />}
                  </span>
                  <span>Minimum of 8 characters</span>
                </li>
                <li className={clsx(`create-or-change-password-page__validation-item`, {
                  'create-or-change-password-page__validation-item--valid': isContainsUppercaseLetter, 
                })}>
                  <span className="create-or-change-password-page__checkbox">
                    {isContainsUppercaseLetter && <span className="create-or-change-password-page__checkmark" />}
                  </span>
                  <span>Contains an uppercase letter</span>
                </li>
                <li className={clsx(`create-or-change-password-page__validation-item`, {
                  'create-or-change-password-page__validation-item--valid': isContainsLowercaseLetter, 
                })}>
                  <span className="create-or-change-password-page__checkbox">
                    {isContainsLowercaseLetter && <span className="create-or-change-password-page__checkmark" />}
                  </span>
                  <span>Contains an lowercase letter</span>
                </li>
                <li className={clsx(`create-or-change-password-page__validation-item`, {
                  'create-or-change-password-page__validation-item--valid': isContainsNumber, 
                })}>
                  <span className="create-or-change-password-page__checkbox">
                    {isContainsNumber && <span className="create-or-change-password-page__checkmark" />}
                  </span>
                  <span>Contains a number (0-9)</span>
                </li>
                <li className={clsx(`create-or-change-password-page__validation-item`, {
                  'create-or-change-password-page__validation-item--valid': isContainsSpecialCharacters, 
                })}>
                  <span className="create-or-change-password-page__checkbox">
                    {isContainsSpecialCharacters && <span className="create-or-change-password-page__checkmark" />}
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