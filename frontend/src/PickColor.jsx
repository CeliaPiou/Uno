import React, {useState, useEffect} from 'react'
import './pickcolor.css'

const PickColor = ({ setHaveToChoose, setCurrentCard, setWhichTurn }) => {

    const [ color, setColor ] = useState("");
    const [ buttons, setButtons ] = useState([
        {id: "rouge", value: "Rouge"},
        {id: "bleu", value: "Bleu"},
        {id: "vert", value: "Vert"},
        {id: "jaune", value: "Jaune"}
    ])

    const handleClick = (b) => {
        setColor(b.value);
        const newCard = { color: b.id, type: "number", value: "🃏"};
        localStorage.setItem('currentCard', JSON.stringify(newCard));
        setCurrentCard(newCard);
        setWhichTurn("ia");
        setHaveToChoose(false);
    }

    return (

        <div id='pop-up'>

            <div id='card'>

                <h2>What color do you choose ?</h2>
                <div>
                    {buttons.map(b => (
                        <button
                        id={b.id}
                        onClick={() => handleClick(b)}
                        >
                            {b.value}
                        </button>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default PickColor