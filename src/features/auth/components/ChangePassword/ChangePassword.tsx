import {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import { api } from '../../../../common/api';
import AuthInput from '../AuthInput/AuthInput';
import AuthButton from '../AuthButton/AuthButton';

function ChangePassword() {
  const [formData, setFormData] = useState({ password: '' });
  const [token, setToken] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.search.includes('code')) {
      navigate('/auth');
    }

    setToken(location.search.split('=')[1]);
  }, [location]);

  return (
    <AuthForm
      head="Change Password"
      button={<AuthButton value="Done" />}
      onSubmit={handleFormSubmit}
    >
      <AuthInput
        id="password"
        type="password"
        label="Password"
        value={formData.password}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, password: event.target.value })}
      />
    </AuthForm>

  );
  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    const {
      password,
    } = formData;

    event.preventDefault();

    if (password) {
      try {
        await api.post('create-password', {
          login: 'anton@tourmalinecore.com',
          userResetPasswordToken: `${token}==`,
          password: formData.password,
        });
      } catch (e) {
        setFormData({ ...formData, password: '' });
      }
    }
  }
}

export default ChangePassword;
