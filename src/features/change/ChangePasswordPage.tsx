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

function ChangePasswordPage() {
  useAuthenticated();

  const [formData, setFormData] = useState('');

  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [isTooltip, setIsTooltip] = useState(false);

  const [searchParams] = useSearchParams();

  const {
    minLenght,
    isContainsNumber,
    isContainsUppercaseLetter,
    isValid,
  } = useValidation(formData, {
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
      >

        <h1 className="change-password-page__title">Change password</h1>

        <div className="change-password-page__login">
          Логин:
          {' '}
          {login || ''}
        </div>
        <div style={{
          position: 'relative',
        }}
        >
          <Input
            id="password"
            type="password"
            label="Change password"
            className="change-password-page__input ddd"
            value={formData}
            isInvalid={!formData && triedToSubmit}
            validationMessages={['Поле должно быть заполнено']}
            isMessagesAbsolute
            onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData(event.target.value)}
            onFocus={() => setIsTooltip(true)}
            onBlur={() => setIsTooltip(false)}
            autoComplete="off"
          />

          {(isTooltip || formData) && isValid && (
            <Tooltip
              className="change-password-page__tooltip"
            >
              <ul className="change-password-page__required-list">
                <li
                  className={clsx({
                    'test-e': minLenght,
                  })}
                >
                  больше 8
                </li>
                <li className={clsx({
                  'test-e': isContainsUppercaseLetter,
                })}
                >
                  с большой буквы
                </li>
                <li className={clsx({
                  'test-e': isContainsNumber,
                })}
                >
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

    if (formData) {
      try {
        await api.post('/auth/create-password', {
          login,
          userResetPasswordToken,
          password: formData,
        });

        await setLogin({ login, password: formData });
      } catch (e) {
        setFormData('');
      }
    }
  }
}

export default ChangePasswordPage;
