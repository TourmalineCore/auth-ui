import { FormEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

import Button from '../Button/Button';
import logo from '../../assets/img/tc-logo.svg';

function LoginForm({
  children,
  errorMessages = [],
  onSubmit = () => {},
  buttonText = 'Log In',
  buttonDisabled = true,
  title,
  subtitle,
  email,
  className,
}: {
  children: ReactNode;
  errorMessages?: string[];
  onSubmit: FormEventHandler<HTMLFormElement>;
  buttonText?: string;
  buttonDisabled?: boolean;
  title?: string;
  subtitle?: string;
  email?: string;
  className?:string;
}) {
  return (
    <div className={clsx('login-form login-form--create', className)}>
      <div className="login-form__inner">
        <img className="login-form__logo" src={logo} alt="Tourmaline Core Logo" />

        <h1 className="login-form__title">{title}</h1>
        <h2 className="login-form__subtitle">
          {subtitle}
          {' '}
          <span className="login-form__email">{email}</span>
        </h2>
        <form className="login-form__form" onSubmit={onSubmit}>
          {children}
          <div className="login-form__submit-btn-wrapper ">
            <Button
              type="submit"
              disabled={buttonDisabled}
              className="login-form__submit-btn"
            >
              {buttonText}
            </Button>
          </div>

          <div className="login-form__messages-box">
            {errorMessages.map((errorMessage) => (
              <div className="login-form__message">
                {errorMessage}
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
