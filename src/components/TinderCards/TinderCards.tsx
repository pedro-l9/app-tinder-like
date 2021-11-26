import React, { createRef, useMemo, useRef, useState } from 'react';
import TinderCard from 'react-tinder-card';

import { Person } from '../../models';

import './TinderCards.css';

type Card = Person & {
  id: string;
  ref: React.RefObject<any>;
};

interface Props {
  cards: Card[];
  onSwipe: (id: string, direction: string) => void;
}

function TinderCards({ cards, onSwipe }: Props) {
  return (
    <div className="tinderCards__cardContainer">
      {cards.map((card, index) => (
        <TinderCard
          ref={card.ref}
          className="swipe"
          key={card.name}
          preventSwipe={['up', 'down']}
          onSwipe={(direction) => onSwipe(card.id, direction)}
        >
          <div style={{ backgroundImage: `url(${card.url})` }} className="card">
            <div className="person-name">{card.name}</div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
