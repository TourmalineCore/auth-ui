import { createContext } from 'react'
import { CreatePasswordState } from './CreatePasswordState'

export const CreatePasswordStateContext = createContext<CreatePasswordState>(new CreatePasswordState())