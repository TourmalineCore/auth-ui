import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CreateOrChangePasswordStateContext } from './state/CreateOrChangePasswordStateContext'
import { CreateOrChangePasswordContent } from './CreateOrChangePasswordContent'
import { api } from '../../common/api'
import { setLogin } from '../../common/authService'
import { useAuthenticated } from '../../common/hooks/useAuthenticated'

export const CreateOrChangePasswordContainer = observer(() => {
  const createOrChangePasswordState = useContext(CreateOrChangePasswordStateContext)
  const [
    searchParams,
  ] = useSearchParams()
  useAuthenticated()

  const isChangeMode = location.pathname.includes(`change-password`)
  if(isChangeMode) {
    createOrChangePasswordState.setIsChangeMode()
  }

  const login = searchParams.get(isChangeMode ? `corporateEmail` : `login`)
  const token = searchParams.get(isChangeMode ? `passwordResetToken` : `userResetPasswordToken`)

  return (
    <CreateOrChangePasswordContent
      handleFormSubmit={handleFormSubmit}
      login={login}
    />
  )

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (createOrChangePasswordState.password) {
      try {
        if (isChangeMode) {
          await api.put(`/auth/change-password`, {
            corporateEmail: login,
            passwordResetToken: token,
            newPassword: createOrChangePasswordState.password,
          })
        }
        else {
          await api.post(`/auth/change-password`, {
            login,
            userResetPasswordToken: token,
            password: createOrChangePasswordState.password,
          })
        }

        await setLogin({
          login,
          password: createOrChangePasswordState.password,
        })
      }
      catch (e) {
        createOrChangePasswordState.setPassword({
          newValue: ``,
        })
      }
    }
  }
})