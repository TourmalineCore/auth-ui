import { Button } from '@tourmalinecore/react-tc-ui-kit';
import { FormEventHandler, ReactNode } from 'react';

import { ReactComponent as BgLeft } from '../../assets/img/auth-bg-left.svg';
import { ReactComponent as BgRight } from '../../assets/img/auth-bg-right.svg';

function LoginForm({
  children,
  errorMessages = [],
  onSubmit = () => {},
  buttonText = 'Log In',
  buttonDisabled = false,
}: {
  children: ReactNode;
  errorMessages?: string[];
  onSubmit: FormEventHandler<HTMLFormElement>;
  buttonText?: string;
  buttonDisabled?: boolean;
}) {
  return (
    <div className="login-form">
      <div className="login-form__inner">
        <BgLeft className="login-form__bg-image login-form__bg-image--left" />
        <BgRight className="login-form__bg-image login-form__bg-image--right" />

        <form className="login-form__form" onSubmit={onSubmit}>
          <div className="login-form__messages-box">
            {errorMessages.map((errorMessage) => (
              <div className="login-form__message">
                {errorMessage}
              </div>
            ))}
          </div>

          {children}

          <div className="login-form__controls">
            <Button
              type="submit"
              disabled={buttonDisabled}
            >
              {buttonText}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
