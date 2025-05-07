import React, { useEffect, useState } from 'react'
import './historique.css'

const Historique = ({ currentCard, whichTurn, hasPlayedOnce }) => {

  const [ tableauActions, setTableauActions ] = useState([]);
  const [ isDeployed, setIsDeployed ] = useState(false);


  // Gérer le dépliement / repliement
  const handleDeploy = () => {
    setIsDeployed(!isDeployed);
    const panneau = document.getElementById("historique-container");
    if(!isDeployed) {
      panneau.classList.remove("visible");
    }
    else {
      panneau.classList.add("visible");
    }
  }

  // Récupération infos historique
  useEffect(() => {

    const card = localStorage.getItem("currentCard");
    if(hasPlayedOnce) {

      try {
        const parsedCard = JSON.parse(card);

        if (parsedCard && typeof parsedCard === 'object') {
          // Détermine quel joueur a joué
          const player = whichTurn === "ia" ? "human" : "ia";

          // Ajoute une nouvelle entrée à l'historique
          const newEntry = {
            player: player,
            card: parsedCard
          };

          setTableauActions(prev => [...prev, newEntry]);
        }

      } catch (error) {
        console.error("Erreur de parsing de la carte :", error);
      }


    }

  }, [currentCard, whichTurn]);


  return (

    <section id="historique-container">
      <div id='historique'>

        <h2>Historique du jeu :</h2>

        {tableauActions.map((entry, index) => (
          <div key={index}>
            Tour {index + 1} : <strong>{entry.player}</strong> a joué <em>{entry.card.value} {entry.card.color}</em>
          </div>
        ))}

      </div>

      <div onClick={() => handleDeploy()} id="arrow-container">
        <p>
          {isDeployed ?
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
          }
        </p>
      </div>
    </section>

  );
};

export default Historique;
