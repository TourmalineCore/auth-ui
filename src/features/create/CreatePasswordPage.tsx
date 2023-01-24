import {
  useState, ChangeEvent, FormEvent,
} from 'react';

import { Input } from '@tourmalinecore/react-tc-ui-kit';

import { clsx } from 'clsx';
import { useSearchParams } from 'react-router-dom';
import { api } from '../../common/api';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useValidation } from '../../common/hooks/useValidation';
import Tooltip from '../../components/Tooltip/Tooltip';

import { setLogin } from '../../common/authService';
import { useAuthenticated } from '../../common/hooks/useAuthenticared';

function CreatePasswordPage() {
  useAuthenticated();

  const [password, setPassword] = useState('');

  const [triedToSubmit, setTriedToSubmit] = useState(false);
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
    <div className="create-password-page">
      <LoginForm
        onSubmit={handleFormSubmit}
        buttonText="Done"
        buttonDisabled={isValid}
      >

        <h1 className="create-password-page__title">Create password</h1>

        <div className="create-password-page__login">
          Логин:
          {' '}
          {login || ''}
        </div>
        <div className="create-password-page__inner">
          <Input
            id="password"
            type="password"
            label="Create password"
            className="create-password-page__input"
            value={password}
            isInvalid={!password && triedToSubmit}
            validationMessages={['Поле должно быть заполнено']}
            isMessagesAbsolute
            onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            onFocus={() => setIsTooltip(true)}
            onBlur={() => setIsTooltip(false)}
            autoComplete="off"
          />

          {(isTooltip || password) && isValid && (
            <Tooltip className="create-password-page__tooltip">
              <ul className="create-password-page__required-list">
                <li className={clsx({ 'create-password-page__valid': minLenght })}>
                  больше 8
                </li>
                <li className={clsx({ 'create-password-page__valid': isContainsUppercaseLetter })}>
                  с большой буквы
                </li>
                <li className={clsx({ 'create-password-page__valid': isContainsNumber })}>
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

    setTriedToSubmit(true);

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

export default CreatePasswordPage;
