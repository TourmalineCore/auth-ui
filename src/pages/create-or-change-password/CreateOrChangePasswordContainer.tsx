import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CreateOrChangePasswordStateContext } from './state/CreateOrChangePasswordStateContext'
import { CreateOrChangePasswordContent } from './CreateOrChangePasswordContent'
import { api } from '../../common/api'
import { useValidation } from '../../common/hooks/useValidation'
import { setLogin } from '../../common/authService'
import { useAuthenticated } from '../../common/hooks/useAuthenticated'

export const CreateOrChangePasswordContainer = observer(() => {
  const createOrChangePasswordState = useContext(CreateOrChangePasswordStateContext)
  const [
    searchParams,
  ] = useSearchParams()
  useAuthenticated()

  const login = searchParams.get(`login`)
  const userResetPasswordToken = searchParams.get(`userResetPasswordToken`)

  const {
    minLenght,
    isContainsNumber,
    isContainsUppercaseLetter,
    isContainsLowercaseLetter,
    isContainsSpecialCharacters,
    isValid,
  } = useValidation(createOrChangePasswordState.password, {
    minLenght: 8,
    isContainsNumber: true,
    isContainsUppercaseLetter: true,
    isContainsLowercaseLetter: true,
    isContainsSpecialCharacters: true,
  })

  return (
    <CreateOrChangePasswordContent
      handleFormSubmit={handleFormSubmit}
      login={login}
      validation={{
        minLenght,
        isContainsNumber,
        isContainsUppercaseLetter,
        isContainsLowercaseLetter,
        isContainsSpecialCharacters,
        isValid,
      }}
    />
  )

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (createOrChangePasswordState.password) {
      try {
        await api.post(`/auth/change-password`, {
          login,
          userResetPasswordToken,
          password: createOrChangePasswordState.password,
        })

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