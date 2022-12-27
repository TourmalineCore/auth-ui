import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import ResetPassword from './features/auth/components/ResetPassword/ResetPassword';

import LoginPage from './features/auth/LoginPage';
import LogoutPage from './features/logout/LogoutPage';
import ChangePassword from './features/auth/components/ChangePassword/ChangePassword';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/invation" element={<ChangePassword />} />
        <Route path="/auth/logout" element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
