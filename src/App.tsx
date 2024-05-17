import { Route, Routes, Navigate } from 'react-router';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Routes>
      <Route path='/login' element={ <LoginPage />} />
      <Route path='/' element={ <Navigate to='/login' /> } />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
