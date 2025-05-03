import React, { useEffect, useState } from 'react'
import "./card.css"

const PlayerDeck = ( gameStarted ) => {

    // Les cartes
    const cards = [

        // Rouge

        { color: "rouge", type: "number", value: 0, img: ""},

        { color: "rouge", type: "number", value: 1, img: ""},
        { color: "rouge", type: "number", value: 2, img: ""},
        { color: "rouge", type: "number", value: 3, img: ""},
        { color: "rouge", type: "number", value: 4, img: ""},
        { color: "rouge", type: "number", value: 5, img: ""},
        { color: "rouge", type: "number", value: 6, img: ""},
        { color: "rouge", type: "number", value: 7, img: ""},
        { color: "rouge", type: "number", value: 8, img: ""},
        { color: "rouge", type: "number", value: 9, img: ""},

        { color: "rouge", type: "number", value: 1, img: ""},
        { color: "rouge", type: "number", value: 2, img: ""},
        { color: "rouge", type: "number", value: 3, img: ""},
        { color: "rouge", type: "number", value: 4, img: ""},
        { color: "rouge", type: "number", value: 5, img: ""},
        { color: "rouge", type: "number", value: 6, img: ""},
        { color: "rouge", type: "number", value: 7, img: ""},
        { color: "rouge", type: "number", value: 8, img: ""},
        { color: "rouge", type: "number", value: 9, img: ""},

        { color: "rouge", type: "actions", value: "skip", img: ""},
        { color: "rouge", type: "actions", value: "skip", img: ""},
        { color: "rouge", type: "actions", value: "reverse", img: ""},
        { color: "rouge", type: "actions", value: "reverse", img: ""},
        { color: "rouge", type: "actions", value: "drawTwo", img: ""},
        { color: "rouge", type: "actions", value: "drawTwo", img: ""},


        // Jaune

        { color: "jaune", type: "number", value: 0, img: ""},

        { color: "jaune", type: "number", value: 1, img: ""},
        { color: "jaune", type: "number", value: 2, img: ""},
        { color: "jaune", type: "number", value: 3, img: ""},
        { color: "jaune", type: "number", value: 4, img: ""},
        { color: "jaune", type: "number", value: 5, img: ""},
        { color: "jaune", type: "number", value: 6, img: ""},
        { color: "jaune", type: "number", value: 7, img: ""},
        { color: "jaune", type: "number", value: 8, img: ""},
        { color: "jaune", type: "number", value: 9, img: ""},

        { color: "jaune", type: "number", value: 1, img: ""},
        { color: "jaune", type: "number", value: 2, img: ""},
        { color: "jaune", type: "number", value: 3, img: ""},
        { color: "jaune", type: "number", value: 4, img: ""},
        { color: "jaune", type: "number", value: 5, img: ""},
        { color: "jaune", type: "number", value: 6, img: ""},
        { color: "jaune", type: "number", value: 7, img: ""},
        { color: "jaune", type: "number", value: 8, img: ""},
        { color: "jaune", type: "number", value: 9, img: ""},

        { color: "jaune", type: "actions", value: "skip", img: ""},
        { color: "jaune", type: "actions", value: "skip", img: ""},
        { color: "jaune", type: "actions", value: "reverse", img: ""},
        { color: "jaune", type: "actions", value: "reverse", img: ""},
        { color: "jaune", type: "actions", value: "drawTwo", img: ""},
        { color: "jaune", type: "actions", value: "drawTwo", img: ""},

        // Bleu

        { color: "bleu", type: "number", value: 0, img: ""},

        { color: "bleu", type: "number", value: 1, img: ""},
        { color: "bleu", type: "number", value: 2, img: ""},
        { color: "bleu", type: "number", value: 3, img: ""},
        { color: "bleu", type: "number", value: 4, img: ""},
        { color: "bleu", type: "number", value: 5, img: ""},
        { color: "bleu", type: "number", value: 6, img: ""},
        { color: "bleu", type: "number", value: 7, img: ""},
        { color: "bleu", type: "number", value: 8, img: ""},
        { color: "bleu", type: "number", value: 9, img: ""},

        { color: "bleu", type: "number", value: 1, img: ""},
        { color: "bleu", type: "number", value: 2, img: ""},
        { color: "bleu", type: "number", value: 3, img: ""},
        { color: "bleu", type: "number", value: 4, img: ""},
        { color: "bleu", type: "number", value: 5, img: ""},
        { color: "bleu", type: "number", value: 6, img: ""},
        { color: "bleu", type: "number", value: 7, img: ""},
        { color: "bleu", type: "number", value: 8, img: ""},
        { color: "bleu", type: "number", value: 9, img: ""},

        { color: "bleu", type: "actions", value: "skip", img: ""},
        { color: "bleu", type: "actions", value: "skip", img: ""},
        { color: "bleu", type: "actions", value: "reverse", img: ""},
        { color: "bleu", type: "actions", value: "reverse", img: ""},
        { color: "bleu", type: "actions", value: "drawTwo", img: ""},
        { color: "bleu", type: "actions", value: "drawTwo", img: ""},

        // Vert

        { color: "vert", type: "number", value: 0, img: ""},

        { color: "vert", type: "number", value: 1, img: ""},
        { color: "vert", type: "number", value: 2, img: ""},
        { color: "vert", type: "number", value: 3, img: ""},
        { color: "vert", type: "number", value: 4, img: ""},
        { color: "vert", type: "number", value: 5, img: ""},
        { color: "vert", type: "number", value: 6, img: ""},
        { color: "vert", type: "number", value: 7, img: ""},
        { color: "vert", type: "number", value: 8, img: ""},
        { color: "vert", type: "number", value: 9, img: ""},

        { color: "vert", type: "number", value: 1, img: ""},
        { color: "vert", type: "number", value: 2, img: ""},
        { color: "vert", type: "number", value: 3, img: ""},
        { color: "vert", type: "number", value: 4, img: ""},
        { color: "vert", type: "number", value: 5, img: ""},
        { color: "vert", type: "number", value: 6, img: ""},
        { color: "vert", type: "number", value: 7, img: ""},
        { color: "vert", type: "number", value: 8, img: ""},
        { color: "vert", type: "number", value: 9, img: ""},

        { color: "vert", type: "actions", value: "skip", img: ""},
        { color: "vert", type: "actions", value: "skip", img: ""},
        { color: "vert", type: "actions", value: "reverse", img: ""},
        { color: "vert", type: "actions", value: "reverse", img: ""},
        { color: "vert", type: "actions", value: "drawTwo", img: ""},
        { color: "vert", type: "actions", value: "drawTwo", img: ""},

    ]

    // Mélange des cartes
    function shuffle(array) {
        for(let i = array.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));
            [array[i], array[random]] = [array[random], array[i]]
        }
    }
    shuffle(cards)

    // Distribution des cartes
    const [ deck, setDeck ] = useState([]);
    useEffect(() => {

        if(localStorage.getItem("cardsDeck") != null) {
            const selectCards = JSON.parse(localStorage.getItem("cardsDeck"));
            setDeck(selectCards);
        }

        else {
            const selectCards = cards.slice(0, 7);
            setDeck(selectCards);
            localStorage.setItem("cardsDeck", JSON.stringify(selectCards))
        }

    }, []);



    return (
        <section id="container-card">
            {deck.map(card => (
                <div  className="card"
                style={{
                    backgroundColor:
                        card.color === "rouge"
                        ? "red"
                        : card.color === "jaune"
                        ? "yellow"
                        : card.color === "bleu"
                        ? "blue"
                        : card.color === "vert"
                        ? "green"
                        : "noir",

                    color:
                        card.color === "rouge"
                        ? "red"
                        : card.color === "jaune"
                        ? "yellow"
                        : card.color === "bleu"
                        ? "blue"
                        : card.color === "vert"
                        ? "green"
                        : "noir",
                    }}
                >


                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F2F4F8" d="M51.3,-28.1C62.7,-9.9,65.5,14.8,55.5,30.4C45.5,46.1,22.8,52.8,-0.8,53.2C-24.4,53.7,-48.7,47.9,-58.6,32.3C-68.5,16.7,-63.9,-8.7,-51.7,-27.4C-39.5,-46.1,-19.7,-57.9,0.1,-58C20,-58.1,39.9,-46.3,51.3,-28.1Z" transform="translate(100 100)" />
                    </svg>

                    <p>{card.type == "number" ?         card.value
                    : card.value == "reverse" ?          "🏓"
                    : card.value == "skip" ?             "⛔"
                    : card.value == "drawTwo" ?          "+2"
                    :
                    "coucou"
                    }</p>
                </div>
            ))}
        </section>
    )
}

export default PlayerDeck