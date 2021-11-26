import { createRef, useCallback, useMemo, useRef } from 'react';
import { Header, SwipeButtons, TinderCards } from '../../components';
import useAccountContext from '../../hooks/useAccountContext';

import './PeopleMatching.css';

declare var chrome: any;

const people = [
  {
    name: 'Pedro, 22',
    url: 'https://i.imgur.com/hlKSLDc.jpg',
  },
  {
    name: 'Iarin, 22',
    url: 'https://i.imgur.com/n69gZNz.png',
  },
  {
    name: 'Gabriela, 22',
    url: 'https://i.imgur.com/2zO4OGXh.jpg',
  },
  {
    name: 'Bruno, 22',
    url: 'https://i.imgur.com/BT1Nogk.jpg',
  },
];

function PeopleMatching() {
  chrome?.tabs?.query(
    { active: true, lastFocusedWindow: true },
    (tabs: any) => {
      let url = tabs[0].url;
      console.log(url);
    }
  );
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
    <div className="people-matching">
      <Header logout={logout} />
      <TinderCards onSwipe={onSwipe} cards={cards} />
      <SwipeButtons
        swipeRight={() => swipe('right')}
        swipeLeft={() => swipe('left')}
      />
    </div>
  );
}

export default PeopleMatching;
