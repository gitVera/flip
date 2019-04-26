import React from 'react'
import Card from '../card'
import './styles.css'

export default function Board({ cards, flipped, solved, disabled, handleClick }) {
  return (
    <div className='board'>
      {cards.map((card) => (
        <Card
          key={card.id}
          handleClick={handleClick}
          flipped={flipped.includes(card.id)}
          solved={solved.includes(card.id)}
          disabled={disabled || solved.includes(card.id)}
          {...card}
        />
      ))}
    </div>
  )
}