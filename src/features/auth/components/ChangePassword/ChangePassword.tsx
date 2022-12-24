import { ChangeEvent, FormEvent, useState } from 'react';
import { Input, Button } from '@tourmalinecore/react-tc-ui-kit';
import AuthForm from '../AuthForm/AuthForm';
import { api } from '../../../../common/api';

function ChangePassword() {
  const [formData, setFormData] = useState({ password: '' });
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  return (
    <AuthForm
      head="Change Password"
      button={<Button type="submit">Done</Button>}
      onSubmit={handleFormSubmit}
    >
      <Input
        id="password"
        type="password"
        label="Email"
        value={formData.password}
        isInvalid={!formData.password && triedToSubmit}
        validationMessages={['Поле должно быть заполнено']}
        isMessagesAbsolute
        onChange={(event: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, password: event.target.value })}
      />
    </AuthForm>

  );
  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    const {
      password,
    } = formData;

    event.preventDefault();

    setTriedToSubmit(true);

    if (password) {
      try {
        await api.post('create-password', {});
      } catch (e) {
        setFormData({ password: '' });
      }
    }
  }
}

export default ChangePassword;
