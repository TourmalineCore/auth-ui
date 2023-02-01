import {
  useState, FormEvent,
} from 'react';

import { api } from '../../common/api';
import emailIcon from '../../assets/img/icon-email.svg';

import LoginForm from '../../components/LoginForm/LoginForm';
import InputEmailDomain from '../../components/Input/InputEmailDomain';

function ResetPage() {
  const [login, setLogin] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const successfulMessage = isSuccessful ? 'We have sent a link to reset your password to your email. Check your email or change the entered data.' : '';
  return (
    <div className="background-img-pages reset-page">
      <LoginForm
        onSubmit={handleFormSubmit}
        buttonText="Send"
        title="Reset Password"
        subtitle="Enter your email, a reset link will be sent to it"
        buttonDisabled={false}
        backPath="/auth"
        errorMessage={successfulMessage}
      >
        <InputEmailDomain
          id="reset"
          label="Email"
          iconSrc={emailIcon}
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
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
