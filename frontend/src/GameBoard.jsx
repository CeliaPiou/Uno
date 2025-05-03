import React from 'react'
import PlayerDeck from './PlayerDeck'

const GameBoard = ( {gameStarted, setGameStarted} ) => {

    const handleEndGame = () => {
        setGameStarted(false);
        localStorage.setItem('gameIsOn', false);
        localStorage.removeItem("cardsDeck");
    }


  return (

    <div>
        <button id='endgame' onClick={() => handleEndGame()}>Restart</button>

        <PlayerDeck gameStarted={gameStarted} />
    </div>

  )
}

export default GameBoard