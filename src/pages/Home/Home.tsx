import { useState } from 'react';
import { EventConfirmation, PeopleMatching } from '..';

import './Home.css';

function Home() {
  const [userIsGoing, setUserIsGoing] = useState(false);

  return userIsGoing ? (
    <PeopleMatching />
  ) : (
    <EventConfirmation userAnswered={setUserIsGoing} />
  );
}

export default Home;
