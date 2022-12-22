import { FormEventHandler, ReactNode } from 'react';

import './AuthForm.scss';

function AuthForm({
  head, desk, children, button, onSubmit,
}:{ head: string, desk?:string, children:ReactNode, button:ReactNode, onSubmit: FormEventHandler<HTMLFormElement>; }) {
  return (
    <div className="auth-form">
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <h1>{head}</h1>
            {desk
          && <div>{desk}</div>}
          </div>
          <div>
            {children}
          </div>
          <div>{button}</div>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
