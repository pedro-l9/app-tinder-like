import { MemoryRouter, Route, Routes } from 'react-router-dom';

import useAccountContext from './hooks/useAccountContext';

import './App.css';
import { Home, Lobby, Login, Signup } from './pages';

function App() {
  const { isAuthenticated } = useAccountContext();

  return (
    <div className={'App'}>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <Lobby />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </MemoryRouter>
    </div>
  );
}

export default App;
