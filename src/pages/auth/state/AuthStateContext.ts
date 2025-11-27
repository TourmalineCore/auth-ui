import { createContext } from 'react'
import { AuthState } from './AuthState'

export const AuthStateContext = createContext<AuthState>(null as unknown as AuthState)
