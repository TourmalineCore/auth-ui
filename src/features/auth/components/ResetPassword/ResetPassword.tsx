import { ChangeEvent, FormEvent, useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { api } from '../../../../common/api';
import AuthInput from '../AuthInput/AuthInput';
import AuthButton from '../AuthButton/AuthButton';

function ResetPassword() {
  const [formData, setFormData] = useState({ email: '' });
  return (
    <AuthForm
      head="Reset Password"
      desk="Enter your email, a reset link will be sent to it"
      button={<AuthButton value="Send" />}
      onSubmit={handleFormSubmit}
    >
      <AuthInput
        id="email"
        type="text"
        label="Email"
        value={formData.email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: event.target.value })}
      />
    </AuthForm>

  );
  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    const {
      email,
    } = formData;

    event.preventDefault();

    if (email) {
      try {
        await api.post(`reset?corporateEmail=${email}@tourmalinecore.com`);
      } catch (e) {
        setFormData({ email: '' });
      }
    }
  }
}

export default ResetPassword;
