import { FormEvent} from 'react'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { ResetStateContext } from './state/ResetStateContext'
import { ResetContent } from './ResetPageContent'
import { api } from '../../common/api'

export const ResetContainer = observer(() => {
  const resetState = useContext(ResetStateContext)

  return (
    <ResetContent
      handleFormSubmit={handleFormSubmit}
    />
  )

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (resetState.login) {
      try {
        await api.post(`/auth/reset?corporateEmail=${resetState.login}@tourmalinecore.com`)

        resetState.setIsSuccessful()
      }
      catch (e) {
        resetState.setLogin({
          login: ``,
        })
      }
    }
  }
})