import { createContext } from 'react'
import { ResetState } from './ResetState'

export const ResetStateContext = createContext<ResetState>(null as unknown as ResetState)
