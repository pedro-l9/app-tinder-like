import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

import './SwipeButtons.css';

interface Props {
  swipeRight: () => void;
  swipeLeft: () => void;
}

function SwipeButtons({ swipeRight, swipeLeft }: Props) {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__left" onClick={swipeLeft}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right" onClick={swipeRight}>
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
