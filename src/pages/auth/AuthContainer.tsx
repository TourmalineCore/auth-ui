import "./AuthPage.scss"

import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { AuthStateContext } from './state/AuthStateContext'
import { AuthContent } from './AuthContent'
import { setLogin } from '../../common/authService'
import { useAuthenticated } from '../../common/hooks/useAuthenticated'

export const AuthContainer = observer(() => {
  const authState = useContext(AuthStateContext)
  useAuthenticated()

  return (
    <AuthContent
      handleFormSubmit={handleFormSubmit}
    />
  )

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    if (authState.isFormValid) {
      authState.setErrorMessage('')

      try {
        await setLogin({
          login: authState.formData.login,
          password: authState.formData.password,
        })
      } catch (e) {
        authState.setErrorMessage('Error: Invalid email or password. Check the correctness of the entered data.')
        authState.resetPassword()
      } 
    }
  }
})