import { Header } from '../../components';
import useAccountContext from '../../hooks/useAccountContext';

import './EventConfirmation.css';

interface Props {
  userAnswered: (willGo: boolean) => void;
}

function EventConfirmation({ userAnswered }: Props) {
  const { logout } = useAccountContext();

  return (
    <div className="event-confirmation">
      <Header logout={logout} />
      <button className="im-going" onClick={() => userAnswered(true)}>
        Eu vou neste evento!
      </button>
    </div>
  );
}

export default EventConfirmation;
