import { useEffect } from 'react'

import { authService } from '../../common/authService'

export function LogoutPage() {
  useEffect(() => {
    authService.setLoggedOut()

    window.location.href = `/auth`
  }, [])

  return (
    <div>You are now logged out</div>
  )
}