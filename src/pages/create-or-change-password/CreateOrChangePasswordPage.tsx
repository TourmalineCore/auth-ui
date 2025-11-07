import { useMemo } from 'react'
import { CreateOrChangePasswordContainer } from './CreateOrChangePasswordContainer'
import { CreateOrChangePasswordStateContext } from './state/CreateOrChangePasswordStateContext'
import { CreateOrChangePasswordState } from './state/CreateOrChangePasswordState'

export function CreateOrChangePasswordPage() {
  const createOrChangePasswordState = useMemo(
    () => new CreateOrChangePasswordState(),
    [],
  )

  return (
    <CreateOrChangePasswordStateContext.Provider value={createOrChangePasswordState}>
      <CreateOrChangePasswordContainer />
    </CreateOrChangePasswordStateContext.Provider>
  )
}
