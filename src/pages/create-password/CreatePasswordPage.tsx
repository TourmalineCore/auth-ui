import { useMemo } from 'react'
import { CreatePasswordContainer } from './CreatePasswordContainer'
import { CreatePasswordStateContext } from './state/CreatePasswordStateContext'
import { CreatePasswordState } from './state/CreatePasswordState'

export function CreatePasswordPage() {
  const createPasswordState = useMemo(
    () => new CreatePasswordState(),
    [],
  )

  return (
    <CreatePasswordStateContext.Provider value={createPasswordState}>
      <CreatePasswordContainer />
    </CreatePasswordStateContext.Provider>
  )
}
