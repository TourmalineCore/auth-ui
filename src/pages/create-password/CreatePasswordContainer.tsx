import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CreatePasswordStateContext } from './state/CreatePasswordStateContext'
import { CreatePasswordContent } from './CreatePasswordContent'
import { api } from '../../common/api'
import { useValidation } from '../../common/hooks/useValidation'
import { setLogin } from '../../common/authService'
import { useAuthenticated } from '../../common/hooks/useAuthenticated'

export const CreatePasswordContainer = observer(() => {
  const createPasswordState = useContext(CreatePasswordStateContext)
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
  } = useValidation(createPasswordState.password, {
    minLenght: 8,
    isContainsNumber: true,
    isContainsUppercaseLetter: true,
    isContainsLowercaseLetter: true,
    isContainsSpecialCharacters: true,
  })

  return (
    <CreatePasswordContent
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

    if (createPasswordState.password) {
      try {
        await api.post(`/auth/change-password`, {
          login,
          userResetPasswordToken,
          password: createPasswordState.password,
        })

        await setLogin({
          login,
          password: createPasswordState.password,
        })
      }
      catch (e) {
        createPasswordState.setPassword(``)
      }
    }
  }
})