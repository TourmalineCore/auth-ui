import { observer } from 'mobx-react-lite'
import { FormEvent, useContext } from 'react'
import { ResetStateContext } from './state/ResetStateContext'
import { InputEmailDomain } from '../../components/Input/InputEmailDomain'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import emailIcon from '../../assets/img/icon-email.svg'

export const ResetContent = observer(({
  handleFormSubmit,
}: {
  handleFormSubmit: (event: FormEvent<HTMLFormElement>) => void,
}) => {
  const resetState = useContext(ResetStateContext)

  const successfulMessage = resetState.isSuccessful 
    ? `We have sent a link to reset your password to your email. Check your email or change the entered data.` 
    : ``

  return (
    <div className="background-img-page reset-page">
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
          value={resetState.login}
          onChange={(event) => resetState.setLogin({
            newValue: event.target.value,
          })}
        />
      </LoginForm>
    </div>
  )
})
