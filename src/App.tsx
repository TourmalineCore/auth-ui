import {BrowserRouter,
  Routes,
  Route} from 'react-router-dom'

import { LogoutPage } from './pages/logout/LogoutPage'
import { ResetPage } from './pages/reset/ResetPage'
import { AuthPage } from './pages/auth/AuthPage'
import { CreateOrChangePasswordPage } from './pages/create-or-change-password/CreateOrChangePasswordPage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/auth"
          element={<AuthPage />} 
        />
        <Route 
          path="/auth/logout"
          element={<LogoutPage />} 
        />
        <Route 
          path="/auth/reset"
          element={<ResetPage />} 
        />
        <Route 
          path="/auth/create-password"
          element={<CreateOrChangePasswordPage />} 
        />
        <Route 
          path="/auth/change-password"
          element={<CreateOrChangePasswordPage />} 
        />
      </Routes>
    </BrowserRouter>
  )
}