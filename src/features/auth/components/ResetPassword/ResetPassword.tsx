import { Input, Button } from '@tourmalinecore/react-tc-ui-kit';
import { ChangeEvent, FormEvent, useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { api } from '../../../../common/api';

function ResetPassword() {
  const [formData, setFormData] = useState({ email: '' });
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  return (
    <AuthForm
      head="Reset Password"
      desk="Enter your email, a reset link will be sent to it"
      button={<Button type="submit">Send</Button>}
      onSubmit={handleFormSubmit}
    >
      <Input
        id="email"
        type="text"
        label="Email"
        value={formData.email}
        isInvalid={!formData.email && triedToSubmit}
        validationMessages={['Поле должно быть заполнено']}
        isMessagesAbsolute
        onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: event.target.value })}
      />
    </AuthForm>

  );
  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    const {
      email,
    } = formData;

    event.preventDefault();

    setTriedToSubmit(true);

    if (email) {
      try {
        await api.post('reset', `${email}@tourmalinecore.com`);
      } catch (e) {
        setFormData({ email: '' });
      }
    }
  }
}

export default ResetPassword;
