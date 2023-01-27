import {
  useState, ChangeEvent, FormEvent,
} from 'react';

import { Link } from 'react-router-dom';
import loginIcon from '../../assets/img/login.svg';

import { setLogin } from '../../common/authService';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useAuthenticated } from '../../common/hooks/useAuthenticared';
import Input from '../../components/Input/Input';
import InputPassword from '../../components/Input/InputPassword';

function AuthPage() {
  useAuthenticated();

  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  return (
    <div className="auth-page">
      <div className="auth-page__left-image" />
      <LoginForm
        onSubmit={handleFormSubmit}
        title="Welcome back"
        subtitle="Sign in to your account"
        buttonDisabled={false}
      >
        <Input
          id="login"
          className="auth-page__input"
          type="text"
          label="Login"
          iconSrc={loginIcon}
          value={formData.login}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, login: event.target.value })}
        />
        <InputPassword
          id="password"
          className="auth-page__input"
          label="Password"
          value={formData.password}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, password: event.target.value })}
        />

        <Link to="/auth/reset" className="auth-page__forget-link">Forgot password?</Link>
      </LoginForm>
    </div>
  );

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    const {
      login,
      password,
    } = formData;

    event.preventDefault();

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
