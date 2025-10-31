import { useMemo } from 'react'
import { AuthState } from './state/AuthState'
import { AuthStateContext } from './state/AuthStateContext'
import { AuthContainer } from './AuthContainer'

export function AuthPage() {
  const authState = useMemo(
    () => new AuthState(),
    [],
  )

  return (
    <AuthStateContext.Provider value={authState}>
      <AuthContainer />
    </AuthStateContext.Provider>
  )
}
