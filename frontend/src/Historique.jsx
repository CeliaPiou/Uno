import React, { useEffect, useState } from 'react'
import './historique.css'

const Historique = ({ currentCard, whichTurn, hasPlayedOnce }) => {

  const [tableauActions, setTableauActions] = useState([]);

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

    <div id='historique'>

      <h2>Historique du jeu :</h2>


      {tableauActions.map((entry, index) => (
        <div key={index}>
          Tour {index + 1} : <strong>{entry.player}</strong> a joué <em>{entry.card.value}</em>
        </div>
      ))}

    </div>
  );
};

export default Historique;
