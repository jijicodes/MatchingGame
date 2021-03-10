import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";

import "./styles.css";
import deck from "./cardsData";

export default function App() {
  const [cards, setCards] = useState(deck);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(checkCards, 500);
    }
  }, [selectedCards]);

  const checkCards = () => {
    const [firstCard, secondCard] = selectedCards;
    if (firstCard.value === secondCard.value) {
      let hasGameBeenWon = true;
      cards.forEach((card) =>
        !card.flipped ? (hasGameBeenWon = false) : null
      );
      setGameWon(hasGameBeenWon);
    } else {
      const newCards = cards.map((card) => {
        if (card.id === firstCard.id || card.id === secondCard.id) {
          const newCard = { ...card, flipped: false };
          return newCard;
        } else {
          return card;
        }
      });
      setCards(newCards);
      setScore(score + 1);
    }
    setSelectedCards([]);
  };

  // flip a card over
  const flipCard = (id) => {
    //find the card and set flipped to true
    const newDeck = cards.map((card) => {
      if (card.id === id && !card.flipped) {
        const newCard = { ...card, flipped: true };
        setSelectedCards([...selectedCards, newCard]);
        return newCard;
      } else {
        return card;
      }
    });

    setCards(newDeck);
  };

  //When a card is flipped over, we want to check if another card is flipped
  //if another card is flipped, check to see  if they are all the same card.
  //if not flip them both back over
  //invrement score by one.
  // if so, keep them both flipped

  //Game over when all cards flipped/matched
  return (
    <div className="App">
      <h1>Emoji Match Up!</h1>
      <ScoreBoard gameWon={gameWon} score={score} />
      <h2>{gameWon ? ` Final Score ${score}!` : null}</h2>
      <GameBoard cards={cards} flipCard={flipCard} />
    </div>
  );
}
