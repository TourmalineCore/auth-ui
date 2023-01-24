import {
  useState, ChangeEvent, FormEvent,
} from 'react';

import { Input } from '@tourmalinecore/react-tc-ui-kit';

import { Link } from 'react-router-dom';
import arrow from '../../assets/img/arrow.png';
import { api } from '../../common/api';
import LoginForm from '../../components/LoginForm/LoginForm';

function ResetPage() {
  const [login, setLogin] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [triedToSubmit, setTriedToSubmit] = useState(false);

  return (
    <div className="reset-page">
      <LoginForm
        onSubmit={handleFormSubmit}
        buttonText="Send"
      >
        <Link to="/auth" className="reset-page__back-link">
          <img src={arrow} alt="Link back to auth page" />
        </Link>

        <h1 className="reset-page__title">Reset Password</h1>
        <div className="reset-page__description">Enter your email, a reset link will be sent to it</div>

        <div className="reset-page__inner">
          <Input
            id="Email"
            type="text"
            label="Email"
            className="reset-page__input"
            value={login}
            isInvalid={!login && triedToSubmit}
            validationMessages={['Поле должно быть заполнено']}
            isMessagesAbsolute
            onChange={(event: ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
          />
          <small className="reset-page__prefix">
            @tourmalinecore.com
          </small>
        </div>
        {isSuccessful && (
          <div className="reset-page__text">We have sent a link to reset your password to your email. Check your email or change the entered data.</div>
        )}
      </LoginForm>
    </div>
  );

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTriedToSubmit(true);

    if (login) {
      try {
        await api.post(`/auth/reset?corporateEmail=${login}@tourmalinecore.com`);

        setIsSuccessful(true);
      } catch (e) {
        setLogin('');
      }
    }
  }
}

export default ResetPage;
