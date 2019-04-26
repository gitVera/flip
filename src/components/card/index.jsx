import React from 'react'
import './styles.css'

export default function Card({
    handleClick, id, flipped, solved, disabled, type
}) {
    return (
        <div
          className={`flip-container ${flipped ? 'flipped' : ''}`}
          onClick={() => (disabled ? null : handleClick(id))}
        >
          <div className='flipper'>
            <img
              className={flipped ? 'flipper-img front' : 'flipper-img back'}
              src={flipped || solved ? `/img/${type}.png` : '/img/back.png'}
            />
          </div>
        </div>
      )
    }