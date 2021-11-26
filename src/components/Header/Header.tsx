import LogoutIcon from '@material-ui/icons/ExitToApp';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';

import './Header.css';

interface Props {
  previousPage?: string;
  logout: () => void;
}

function Header({ previousPage, logout }: Props) {
  const navigate = useNavigate();

  return (
    <div className="header">
      {previousPage ? (
        <IconButton onClick={() => navigate(previousPage)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton onClick={logout}>
          <LogoutIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
