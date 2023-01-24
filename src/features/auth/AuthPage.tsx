import {
  useState, ChangeEvent, FormEvent,
} from 'react';

import { Input } from '@tourmalinecore/react-tc-ui-kit';
import { Link } from 'react-router-dom';

import { setLogin } from '../../common/authService';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useAuthenticated } from '../../common/hooks/useAuthenticared';

function AuthPage() {
  useAuthenticated();

  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });
  const [triedToSubmit, setTriedToSubmit] = useState(false);

  return (
    <div className="auth-page">
      <LoginForm
        onSubmit={handleFormSubmit}
      >
        <Input
          id="login"
          className="auth-page__input"
          type="text"
          label="Login"
          value={formData.login}
          isInvalid={!formData.login && triedToSubmit}
          validationMessages={['Поле должно быть заполнено']}
          isMessagesAbsolute
          onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, login: event.target.value })}
        />

        <Input
          id="password"
          className="auth-page__input"
          type="password"
          label="Password"
          value={formData.password}
          isInvalid={!formData.password && triedToSubmit}
          validationMessages={['Поле должно быть заполнено']}
          isMessagesAbsolute
          onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, password: event.target.value })}
        />

        <Link to="/auth/reset" className="auth-page__forget-link">Forgot password</Link>

      </LoginForm>
    </div>
  );

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    const {
      login,
      password,
    } = formData;

    event.preventDefault();

    setTriedToSubmit(true);

    if (login && password) {
      try {
        await setLogin({ login, password });
      } catch (e) {
        setFormData({ ...formData, password: '' });
      }
    }
  }
}

export default AuthPage;
