
import './App.css'
import { useState, useEffect } from 'react'
import GameBoard from './GameBoard'

function App() {

  // Etat pour gérer le lancement de la partie
  const [ gameStarted, setGameStarted ] = useState(false);

  // Vérification si une partie est déjà lancée, dans le local Storage
  useEffect(() => {

    if(localStorage.getItem('gameIsOn') != null) {
      setGameStarted(JSON.parse(localStorage.getItem('gameIsOn')))
    }

  }, [])

  // Gérer le lancement de la partie, mise dans le localStorage
  function handleStart(ok) {
    setGameStarted(ok)
    localStorage.setItem('gameIsOn', JSON.stringify(ok));
  }

  return (

    <main>

        { gameStarted ?
        <GameBoard gameStarted={gameStarted} setGameStarted={setGameStarted} />
        :
        <>
          <button onClick={() => handleStart(true)}>Start a game</button>
        </> }

    </main>

  )
}

export default App
