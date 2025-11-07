import './AuthPage.scss'

import { observer } from 'mobx-react-lite'
import { ChangeEvent, FormEvent, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthStateContext } from './state/AuthStateContext'
import loginIcon from '../../assets/img/icon-login.svg'
import logo from '../../assets/img/icon-tc-logo.svg'

import { Input } from '../../components/Input/Input'
import { InputPassword } from '../../components/Input/InputPassword'
import { Button } from '../../components/Button/Button'

export const AuthContent = observer(({
  handleFormSubmit,
}: {
  handleFormSubmit: (event: FormEvent<HTMLFormElement>) => void,
}) => {
  const authState = useContext(AuthStateContext)

  return (
    <div className="background-img-page auth-page">

      <div className="auth-page__wrapper">
        <div className="auth-page__inner">
          <img 
            className="auth-page__logo"
            src={logo}
            alt="Tourmaline Core Logo" 
          />

          <h1 className="auth-page__title">Welcome back</h1>
          <h2 className="auth-page__subtitle">Sign in to your account</h2>

          <form 
            className="auth-page__form"
            onSubmit={handleFormSubmit}
          >
            <Input
              id="login"
              className="auth-page__input"
              data-cy="login-input"
              type="text"
              label="Login"
              iconSrc={loginIcon}
              value={authState.formData.login}
              onChange={
                (event: ChangeEvent<HTMLInputElement>) => authState.setFormData({
                  login: event.target.value, 
                })
              }
            />
            <InputPassword
              id="password"
              className="auth-page__input"
              data-cy="password-input"
              label="Password"
              value={authState.formData.password}
              placeholder="8+ characters"
              onChange={
                (event: ChangeEvent<HTMLInputElement>) => authState.setFormData({
                  password: event.target.value, 
                })
              }
            />

            <Link 
              to="/auth/reset"
              className="auth-page__forget-link"
              data-cy="forget-link"
            >
              Forgot password?
            </Link>

            <div className="auth-page__button-box">
              <Button
                type="submit"
                className="auth-page__button"
                data-cy="submit-button"
                disabled={!authState.isFormValid}
              >
                Log In
              </Button>
            </div>
          </form>
          {authState.errorMessage && (
            <div className="auth-page__result-message"
              data-cy="error-message">
              {authState.errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  )
})