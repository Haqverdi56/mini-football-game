import React, { useState } from 'react'
import "./Football.css"

function Footbal() {
  const [arrow, setArrow] = useState('')
  const [arrowX, setArrowX] = useState(45)
  const [arrowY, setArrowY] = useState(50)
  const [score, setScore] = useState({ home: 0, away: 0 })

  function ArrowUp() {
    setArrowY(() => {
        if (arrowY <= 15) {
            return arrowY;
        } else {
            return arrowY - 5;
        }
    })
  }
  function ArrowRight() {
    console.log(score);
    setArrowX(() => {
        if (arrowX <= 20) {
            setArrowX(45)
            setScore({
              ...score,
              home: score.home + 1
            })
            return arrowX;
        } else {
            return arrowX - 5;
        }
    })
  }
  function ArrowDown() {
    setArrowY(() => {
        if (arrowY >= 80) {
            return arrowY;
        } else {
            return arrowY + 5;
        }
    })
  }
  function ArrowLeft() {
    setArrowX(() => {
        if (arrowX === 60) {
            setArrowX(45)
            setScore({
              ...score,
              away: score.away + 1
            })
            return arrowX;
        } else {
            return arrowX + 5;
        }
    })
  }
 
    

// console.log(arrowY)

  return (
    <>
    <div className='football'>
      <div className='score-div'>
        <span>{score.home}</span>
        <span>{score.away}</span>
      </div>
      <div className='game-div'>
        <div className='door'>1</div>
        <div className='door'>2</div>
      </div>
      <div style={{top: `${arrowY}%`, left:`${arrowX}%`}} className='ball'>{arrow}</div>

      <div className='game-buttons'>
        <button onClick={ArrowUp} className='buttons top'>↑</button>
        <button onClick={ArrowRight} className='buttons left'>←</button>
        <button onClick={ArrowDown}  className='buttons down'>↓</button>
        <button onClick={ArrowLeft} className='buttons right'>→</button>
      </div>
    </div>
    </>
  )
}

export default Footbal
