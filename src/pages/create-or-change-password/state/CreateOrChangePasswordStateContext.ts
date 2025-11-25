import { createContext } from 'react'
import { CreateOrChangePasswordState } from './CreateOrChangePasswordState'

export const CreateOrChangePasswordStateContext = createContext<CreateOrChangePasswordState>(null as unknown as CreateOrChangePasswordState)
