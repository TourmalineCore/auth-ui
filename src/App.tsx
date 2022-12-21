import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import LoginPage from './features/auth/LoginPage';
import LogoutPage from './features/logout/LogoutPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/auth/logout" element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
