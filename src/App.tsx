import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import AuthPage from './features/auth/AuthPage';

import LogoutPage from './features/logout/LogoutPage';
import ResetPage from './features/reset/ResetPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/logout" element={<LogoutPage />} />
        <Route path="/auth/reset" element={<ResetPage />} />
      </Routes>
    </BrowserRouter>
  );
}
