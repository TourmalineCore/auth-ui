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
        <Route path="/" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
