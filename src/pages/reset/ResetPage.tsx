import { useMemo } from 'react'
import { ResetState } from './state/ResetState'
import { ResetStateContext } from './state/ResetStateContext'
import { ResetContainer } from './ResetPageContainer'

export function ResetPage() {
  const resetState = useMemo(
    () => new ResetState(),
    [],
  )

  return (
    <ResetStateContext.Provider value={resetState}>
      <ResetContainer />
    </ResetStateContext.Provider>
  )
}
