import {
  useState, ChangeEvent, FormEvent,
} from 'react';

import { clsx } from 'clsx';
import { useSearchParams } from 'react-router-dom';
import { api } from '../../common/api';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useValidation } from '../../common/hooks/useValidation';
import Tooltip from '../../components/Tooltip/Tooltip';

import { setLogin } from '../../common/authService';
import { useAuthenticated } from '../../common/hooks/useAuthenticared';
import InputPassword from '../../components/Input/InputPassword';

function ChangePasswordPage() {
  useAuthenticated();

  const [password, setPassword] = useState('');

  const [isTooltip, setIsTooltip] = useState(false);

  const [searchParams] = useSearchParams();

  const {
    minLenght,
    isContainsNumber,
    isContainsUppercaseLetter,
    isValid,
  } = useValidation(password, {
    minLenght: 8,
    isContainsNumber: true,
    isContainsUppercaseLetter: true,
  });

  const login = searchParams.get('login');
  const userResetPasswordToken = searchParams.get('userResetPasswordToken');

  return (
    <div className="change-password-page">
      <LoginForm
        onSubmit={handleFormSubmit}
        buttonText="Done"
        buttonDisabled={isValid}
        title="Change Password"
        subtitle="Create new password for"
        email="iivanov@tourmalinecore.com"
      >
        <div className="change-password-page__inner">
          <InputPassword
            id="password"
            label="Create password"
            className="change-password-page__input"
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            onFocus={() => setIsTooltip(true)}
            onBlur={() => setIsTooltip(false)}
            autoComplete="off"
          />

          {(isTooltip || password) && isValid && (
            <Tooltip
              className="change-password-page__tooltip"
            >
              <ul className="change-password-page__required-list">
                <li
                  className={clsx({ 'change-password-page__valid': minLenght })}
                >
                  больше 8
                </li>
                <li className={clsx({ 'change-password-page__valid': isContainsUppercaseLetter })}>
                  с большой буквы
                </li>
                <li className={clsx({ 'change-password-page__valid': isContainsNumber })}>
                  с цифрой
                </li>
              </ul>
            </Tooltip>
          )}
        </div>

      </LoginForm>
    </div>
  );

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password) {
      try {
        await api.post('/auth/create-password', {
          login,
          userResetPasswordToken,
          password,
        });

        await setLogin({ login, password });
      } catch (e) {
        setPassword('');
      }
    }
  }
}

export default ChangePasswordPage;
