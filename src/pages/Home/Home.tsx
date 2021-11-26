import { createRef, useCallback, useMemo, useRef } from 'react';
import { Header, SwipeButtons, TinderCards } from '../../components';
import useAccountContext from '../../hooks/useAccountContext';

import './Home.css';

const people = [
  {
    name: 'Pedro',
    url: 'https://s.gravatar.com/avatar/1774f7db0ce16124fd9505f0e6851e6a?s=200',
  },
  {
    name: 'Pedro2',
    url: 'https://s.gravatar.com/avatar/1774f7db0ce16124fd9505f0e6851e6a?s=200',
  },
  {
    name: 'Pedro3',
    url: 'https://s.gravatar.com/avatar/1774f7db0ce16124fd9505f0e6851e6a?s=200',
  },
  {
    name: 'Pedro4',
    url: 'https://s.gravatar.com/avatar/1774f7db0ce16124fd9505f0e6851e6a?s=200',
  },
];

function Home() {
  const { logout } = useAccountContext();
  const currentIndexRef = useRef(people.length - 1);

  const cards = useMemo(
    () =>
      people.map((person) => ({
        ...person,
        id: person.name,
        ref: createRef<any>(),
      })),
    [people]
  );

  const onSwipe = useCallback((id: string, direction: string) => {
    currentIndexRef.current -= 1;
  }, []);

  const swipe = useCallback(
    async (direction: string) => {
      const currentIndex = currentIndexRef.current;

      if (currentIndex >= 0) {
        await cards[currentIndex]?.ref?.current?.swipe(direction); // Swipe the card!
      }
    },
    [currentIndexRef]
  );

  return (
    <div className="home">
      <Header logout={logout} />
      <TinderCards onSwipe={onSwipe} cards={cards} />
      <SwipeButtons
        swipeRight={() => swipe('right')}
        swipeLeft={() => swipe('left')}
      />
    </div>
  );
}

export default Home;
