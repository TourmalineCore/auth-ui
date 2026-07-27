import { useContext, useEffect } from 'react'
import { authService } from '../authService'
import { useSearchParams } from 'react-router-dom'
import { isSafeReturnUrl } from '../utils/isSafeReturnUrl'

const DEFAULT_RETURN_URL = `/`

export const useAuthenticated = () => {
  // @ts-ignore
  const [
    isAuthenticated,
  ] = useContext(authService.AuthContext)

  const [
    searchParams,
  ] = useSearchParams()

  const returnUrl = searchParams.get(`returnUrl`)

  const safeReturnUrl = getSafeReturnUrl({
    returnUrl,
  })

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = safeReturnUrl
    }
  }, [
    isAuthenticated,
  ])

  function getSafeReturnUrl({
    returnUrl,
  }: {
    returnUrl: string | null,
  }) {
    if (!returnUrl) {
      return DEFAULT_RETURN_URL
    }

    const safeReturnUrl = isSafeReturnUrl({
      returnUrl,
    }) 
      ? returnUrl
      : DEFAULT_RETURN_URL

    return safeReturnUrl
  }
}
