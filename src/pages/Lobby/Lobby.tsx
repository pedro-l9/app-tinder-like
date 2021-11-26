import { Link } from 'react-router-dom';

import './Lobby.css';

function Lobby() {
  return (
    <>
      <Link className="lobby-button" to="/login">
        <button type="button">Login</button>
      </Link>
      <Link className="lobby-button" to="/signup">
        <button type="button">Signup</button>
      </Link>
    </>
  );
}

export default Lobby;
