import { FormEventHandler, ReactNode } from 'react';

import { ReactComponent as Logo } from '../../../../assets/img/logo.svg';

import './AuthForm.scss';

function AuthForm({
  head, desk, children, button, onSubmit,
}:{ head: string, desk?:string, children:ReactNode, button:ReactNode, onSubmit: FormEventHandler<HTMLFormElement>; }) {
  return (
    <div className="auth-form">
      <form onSubmit={onSubmit}>
        <div className="auth-form__window">
          <div className="auth-form__window-logo">
            <Logo height={52} />
          </div>
          <div className="auth-form__window-head">
            {head}
          </div>
          {desk && <div className="auth-form__window-desk">{desk}</div>}
          <div className="auth-form__window-inputs">
            {children}
          </div>
          <div className="auth-form__window-button">{button}</div>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
