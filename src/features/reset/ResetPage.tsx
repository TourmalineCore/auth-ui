import {
  useState, ChangeEvent, FormEvent,
} from 'react';

import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';

import arrow from '../../assets/img/arrow-left-colored.svg';
import { api } from '../../common/api';
import LoginForm from '../../components/LoginForm/LoginForm';

function ResetPage() {
  const [login, setLogin] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  return (
    <div className="reset-page">
      <LoginForm
        onSubmit={handleFormSubmit}
        buttonText="Send"
        title="Reset Password"
        subtitle="Enter your email, a reset link will be sent to it"
      >
        <Link to="/auth" className="reset-page__back-link">
          <img src={arrow} alt="Link back to auth page" />
        </Link>
        <div className="reset-page__inner">
          <Input
            id="Email"
            type="text"
            label="Email"
            className="reset-page__input input--reset"
            value={login}
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
