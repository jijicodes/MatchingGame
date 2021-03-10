import React from "react";
import Card from "./Card";

export default function GameBoard({ cards, flipCard }) {
  return (
    <div className="board">
      {cards.map((card) => {
        return <Card card={card} flipCard={flipCard} />;
      })}
    </div>
  );
}
