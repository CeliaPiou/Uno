import React, { useEffect, useState } from 'react'
import Historique from './Historique';
import "./card.css"

const PlayerDeck = ( {gameStarted, setGameStarted } ) => {

    // Les cartes & const
    const [cards, setCards] = useState([

        // Rouge

        { color: "rouge", type: "number", value: 0},

        { color: "rouge", type: "number", value: 1},
        { color: "rouge", type: "number", value: 2},
        { color: "rouge", type: "number", value: 3},
        { color: "rouge", type: "number", value: 4},
        { color: "rouge", type: "number", value: 5},
        { color: "rouge", type: "number", value: 6},
        { color: "rouge", type: "number", value: 7},
        { color: "rouge", type: "number", value: 8},
        { color: "rouge", type: "number", value: 9},

        { color: "rouge", type: "number", value: 1},
        { color: "rouge", type: "number", value: 2},
        { color: "rouge", type: "number", value: 3},
        { color: "rouge", type: "number", value: 4},
        { color: "rouge", type: "number", value: 5},
        { color: "rouge", type: "number", value: 6},
        { color: "rouge", type: "number", value: 7},
        { color: "rouge", type: "number", value: 8},
        { color: "rouge", type: "number", value: 9},

        { color: "rouge", type: "actions", value: "skip"},
        { color: "rouge", type: "actions", value: "skip"},
        { color: "rouge", type: "actions", value: "reverse"},
        { color: "rouge", type: "actions", value: "reverse"},
        { color: "rouge", type: "actions", value: "drawTwo"},
        { color: "rouge", type: "actions", value: "drawTwo"},


        // Jaune

        { color: "jaune", type: "number", value: 0},

        { color: "jaune", type: "number", value: 1},
        { color: "jaune", type: "number", value: 2},
        { color: "jaune", type: "number", value: 3},
        { color: "jaune", type: "number", value: 4},
        { color: "jaune", type: "number", value: 5},
        { color: "jaune", type: "number", value: 6},
        { color: "jaune", type: "number", value: 7},
        { color: "jaune", type: "number", value: 8},
        { color: "jaune", type: "number", value: 9},

        { color: "jaune", type: "number", value: 1},
        { color: "jaune", type: "number", value: 2},
        { color: "jaune", type: "number", value: 3},
        { color: "jaune", type: "number", value: 4},
        { color: "jaune", type: "number", value: 5},
        { color: "jaune", type: "number", value: 6},
        { color: "jaune", type: "number", value: 7},
        { color: "jaune", type: "number", value: 8},
        { color: "jaune", type: "number", value: 9},

        { color: "jaune", type: "actions", value: "skip"},
        { color: "jaune", type: "actions", value: "skip"},
        { color: "jaune", type: "actions", value: "reverse"},
        { color: "jaune", type: "actions", value: "reverse"},
        { color: "jaune", type: "actions", value: "drawTwo"},
        { color: "jaune", type: "actions", value: "drawTwo"},

        // Bleu

        { color: "bleu", type: "number", value: 0},

        { color: "bleu", type: "number", value: 1},
        { color: "bleu", type: "number", value: 2},
        { color: "bleu", type: "number", value: 3},
        { color: "bleu", type: "number", value: 4},
        { color: "bleu", type: "number", value: 5},
        { color: "bleu", type: "number", value: 6},
        { color: "bleu", type: "number", value: 7},
        { color: "bleu", type: "number", value: 8},
        { color: "bleu", type: "number", value: 9},

        { color: "bleu", type: "number", value: 1},
        { color: "bleu", type: "number", value: 2},
        { color: "bleu", type: "number", value: 3},
        { color: "bleu", type: "number", value: 4},
        { color: "bleu", type: "number", value: 5},
        { color: "bleu", type: "number", value: 6},
        { color: "bleu", type: "number", value: 7},
        { color: "bleu", type: "number", value: 8},
        { color: "bleu", type: "number", value: 9},

        { color: "bleu", type: "actions", value: "skip"},
        { color: "bleu", type: "actions", value: "skip"},
        { color: "bleu", type: "actions", value: "reverse"},
        { color: "bleu", type: "actions", value: "reverse"},
        { color: "bleu", type: "actions", value: "drawTwo"},
        { color: "bleu", type: "actions", value: "drawTwo"},

        // Vert

        { color: "vert", type: "number", value: 0},

        { color: "vert", type: "number", value: 1},
        { color: "vert", type: "number", value: 2},
        { color: "vert", type: "number", value: 3},
        { color: "vert", type: "number", value: 4},
        { color: "vert", type: "number", value: 5},
        { color: "vert", type: "number", value: 6},
        { color: "vert", type: "number", value: 7},
        { color: "vert", type: "number", value: 8},
        { color: "vert", type: "number", value: 9},

        { color: "vert", type: "number", value: 1},
        { color: "vert", type: "number", value: 2},
        { color: "vert", type: "number", value: 3},
        { color: "vert", type: "number", value: 4},
        { color: "vert", type: "number", value: 5},
        { color: "vert", type: "number", value: 6},
        { color: "vert", type: "number", value: 7},
        { color: "vert", type: "number", value: 8},
        { color: "vert", type: "number", value: 9},

        { color: "vert", type: "actions", value: "skip"},
        { color: "vert", type: "actions", value: "skip"},
        { color: "vert", type: "actions", value: "reverse"},
        { color: "vert", type: "actions", value: "reverse"},
        { color: "vert", type: "actions", value: "drawTwo"},
        { color: "vert", type: "actions", value: "drawTwo"},


        // Black

        { color: "black", type: "actions", value: "changeColor"},
        { color: "black", type: "actions", value: "changeColor"},
        { color: "black", type: "actions", value: "changeColor"},
        { color: "black", type: "actions", value: "changeColor"},


    ]);
    const [ pile, setPile ] = useState([]);
    const [ currentCard, setCurrentCard ] = useState(null); // La carte qui vient d'être jouée
    const [ previousCard, setPreviousCard ] = useState(null); // La carte précédente
    const [ whichTurn, setWhichTurn ] = useState("human") // A qui est-ce ?
    const [ deck, setDeck ] = useState([]); // Mon deck
    const [ iaDeck, setIaDeck ] = useState([]); // Le deck de l'IA
    const [ hasPlayedOnce, setHasPlayedOnce ] = useState(false);


    // Opacité modifiée selon qui doit jouer
    useEffect(() => {
        if(whichTurn === "ia") { // Si c'est son tour
            const otherP = document.getElementById("legend-your-turn");
            otherP.classList.remove("opacity")

            const p = document.getElementById("legend-their-turn");
            p.classList.add("opacity")
        }
        else { // Si c'est mon tour
            const otherP = document.getElementById("legend-their-turn");
            otherP.classList.remove("opacity")

            const p = document.getElementById("legend-your-turn");
            p.classList.add("opacity");
        }
    }, [whichTurn])

    useEffect(() => {
        // Si carte Noire, faire popper un sélecteur de couleur
    }, [currentCard])


// ________________________________________________________________________
    // Mélange des cartes
    function shuffle(array) {
        for(let i = array.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));
            [array[i], array[random]] = [array[random], array[i]]
        }
    }

    // Distribution des cartes à moi et à l'IA
    useEffect(() => {

        shuffle(cards);

        if(localStorage.getItem("cardsDeck") != null) { // Si le localSto est rempli
            const selectCards = JSON.parse(localStorage.getItem("cardsDeck")); // Je récupère les cartes du localSto
            const iaCards = JSON.parse(localStorage.getItem("iasDeck"));
            setDeck(selectCards); // Je les mets dans le Deck
            setIaDeck(iaCards);

            const remainingCards = JSON.parse(localStorage.getItem('remainingCards')); // Je récup le reste des cards
            setPile(remainingCards); // Je les mets dans la pile
        }

        else {
            const selectCards = cards.slice(0, 7); // Je distribue 7 cartes
            const iaCards = cards.slice(7, 14); // Je distribue 7 cartes à l'IA aussi
            setDeck(selectCards); // Je les mets dans le Deck
            setIaDeck(iaCards); // Je les mets dans le deck de l'IA
            localStorage.setItem("cardsDeck", JSON.stringify(selectCards))
            localStorage.setItem("iasDeck", JSON.stringify(iaCards))

            const remainingCards = cards.slice(14); // Je retire ces 14 cartes de la pile
            localStorage.setItem("remainingCards", JSON.stringify(remainingCards)); // Je mets l'info dans le localSto
            setPile(remainingCards); // Je les mets dans la pile
        }

    }, [gameStarted]);

    // La pile
    useEffect(() => {
        const remaining = JSON.parse(localStorage.getItem('remainingCards'));

        // Si currentCard n'existe pas dans le localStorage, on prend la première carte de remaining
        if (localStorage.getItem("currentCard") == null) {
            if (remaining && remaining.length > 0) {
                setCurrentCard(remaining[0]);
                localStorage.setItem("currentCard", JSON.stringify(remaining[0])); // Sauvegarder dans le localStorage
            }
        } else {
            // Si currentCard existe déjà, on la récupère du localStorage
            const fetchCurrentCard = JSON.parse(localStorage.getItem("currentCard"));
            setCurrentCard(fetchCurrentCard);
        }
    }, []);


// ________________________________________________________________________
    // La pioche
    function fetchCard() {
        const remainingCards = JSON.parse(localStorage.getItem('remainingCards'))
        const cardFetched = remainingCards.pop();
        localStorage.setItem("remainingCards", JSON.stringify(remainingCards));
        return cardFetched;
    }

    // Adversaire ordinateur
    // A chaque tour je laisse un p'tit délai pour faire genre y'a de la reflexion
    useEffect(() => {
        if(whichTurn === "ia") {
            setTimeout(() => {
                playIaTurn();
            }, 1000);
        }
    }, [whichTurn]);

    const playIaTurn = () => {
        const playableCards = iaDeck.filter(card =>
            card.color === currentCard.color ||
            card.value === currentCard.value ||
            card.color === "noir"
        );

        if (playableCards.length > 0) { // Si elle a des options
            const cardToPlay = playableCards[0]; // La première option sera jouée
            setCurrentCard(cardToPlay);

            if (cardToPlay.value === "drawTwo"){
                handlePlusTwo("player")
            }

            const remainingCards = iaDeck.filter(c => c !== cardToPlay) // mise à jour du deck de l'iA
            setIaDeck(remainingCards);
            localStorage.setItem("iasDeck", JSON.stringify(remainingCards));
            localStorage.setItem("currentCard", JSON.stringify(cardToPlay));

            if(cardToPlay.value === "skip" || cardToPlay.value === "reverse") {
                const playableCards = iaDeck.filter(card =>
                    card.color === currentCard.color ||
                    card.value === currentCard.value ||
                    card.color === "noir"
                );
                const secondCard = playableCards[1];

                if(!secondCard) { // Si pas d'autre carte jouable
                    const takeACard = fetchCard(); // Pioche
                    const newIaDeck =  [...iaDeck, takeACard]; // mise à jour du deck
                    setIaDeck(newIaDeck);
                    localStorage.setItem("iasDeck", JSON.stringify(newIaDeck));
                    setWhichTurn("human"); // Au tour de l'humain
                }
                else{ // Si y'a une autre carte jouable
                     // Petite pause avant de jouer la deuxième carte
                    setTimeout(() => {
                        setCurrentCard(secondCard);
                        localStorage.setItem("currentCard", JSON.stringify(currentCard));
                        setWhichTurn("human");
                    }, 1000);
                }

            }
            else {
                setWhichTurn("human");
            }
        }

        else { // Sinon, piocher une carte
            const takeACard = fetchCard();
            const newIaDeck =  [...iaDeck, takeACard];
            setIaDeck(newIaDeck);
            localStorage.setItem("iasDeck", JSON.stringify(newIaDeck));


            setWhichTurn("human"); // Au tour de l'humain
        }
    }

    // Bonus +2
    function handlePlusTwo(target) {
        const remainingCards = JSON.parse(localStorage.getItem('remainingCards')); // Je récup le reste des cards
        if (remainingCards.length < 2) {
            console.warn("Pas assez de cartes dans la pioche !");
            return;
        }
        const twoCards = remainingCards.slice(0,2);

        // mettre à jour remaining cards
        const updatedRemaining = remainingCards.slice(2);
        localStorage.setItem('remainingCards', JSON.stringify(updatedRemaining));

        if (target === "player") {
            setDeck(prev => {
                const updated = [...prev, ...twoCards];
                localStorage.setItem("cardsDeck", JSON.stringify(updated));
                return updated;
            });
        } else {
            setIaDeck(prev => {
                const updated = [...prev, ...twoCards];
                localStorage.setItem("iasDeck", JSON.stringify(updated));
                return updated;
            });

    }};

    // Bonus SkippidySKip
    function handleSkip(target) {
        if(target === "player") {
            setWhichTurn("ia");
        }
        else {
            setWhichTurn("human")
        }
    }

    // Je joue une carte
    const handleCardThrow = (card) => {
        if (card.value === currentCard.value || card.color === currentCard.color || card.color === "noir") {
            // Je mets la carte sur la pile
            setCurrentCard(card);
            localStorage.setItem("currentCard", JSON.stringify(card));

            // Je mets mon deck à jour
            const remainingCards = deck.filter(item => item !== card);
            setDeck(remainingCards);
            localStorage.setItem("cardsDeck", JSON.stringify(remainingCards));

            if(card.value === "drawTwo") {
                handlePlusTwo("ia")
            }

            if(card.value === "skip" || card.value === "reverse") {
                handleSkip("ia")
            }
            else {
                setWhichTurn("ia");
            }

            setHasPlayedOnce(true);
        }
        else {
            alert("Vous pouvez pas jouer cette carte")
        }
    }

    // Je pioche
    const handlePioche = () => {
        if(whichTurn === "human") {
            const newCard = fetchCard();
            const newDeck = [...deck, newCard];
            setDeck(newDeck);
            setHasPlayedOnce(true);
            setWhichTurn("ia");
        }
        else {
            alert("Ce n'est pas votre tour !")
        }
    }


// ________________________________________________________________________
    // Who fockin' won
    useEffect(() => {
        if (!hasPlayedOnce) return;

        if (deck.length < 1) {
            alert("Vous avez gagné !");
            setGameStarted(false);
            localStorage.setItem("gameIsOn", false);
            localStorage.removeItem("cardsDeck");
            localStorage.removeItem("currentCard");
            localStorage.removeItem("iasDeck");
            localStorage.removeItem("remainingCards");

        } else if (iaDeck.length < 1) {
            alert("Vous avez perdu !");
            setGameStarted(false);
            localStorage.setItem("gameIsOn", false);
            localStorage.removeItem("cardsDeck");
            localStorage.removeItem("currentCard");
            localStorage.removeItem("iasDeck");
            localStorage.removeItem("remainingCards");
        }

    }, [deck, iaDeck, hasPlayedOnce]);


    return (
        <>

            <Historique whichTurn={whichTurn} currentCard={currentCard} hasPlayedOnce={hasPlayedOnce} />

            <section id="iasDeck">
            {iaDeck.map(card => (
                <div  className="card card-reverse"
                // style={{
                //     backgroundColor:
                //         card.color === "rouge"
                //         ? "#FD1D1D"
                //         : card.color === "jaune"
                //         ? "#FCB045"
                //         : card.color === "bleu"
                //         ? "#833AB4"
                //         : card.color === "vert"
                //         ? "#76FC45"
                //         : "noir",

                //     color:
                //         card.color === "rouge"
                //         ? "#FD1D1D"
                //         : card.color === "jaune"
                //         ? "#FCB045"
                //         : card.color === "bleu"
                //         ? "#833AB4"
                //         : card.color === "vert"
                //         ? "#76FC45"
                //         : "noir",
                //     }}
                >

                    {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F2F4F8" d="M51.3,-28.1C62.7,-9.9,65.5,14.8,55.5,30.4C45.5,46.1,22.8,52.8,-0.8,53.2C-24.4,53.7,-48.7,47.9,-58.6,32.3C-68.5,16.7,-63.9,-8.7,-51.7,-27.4C-39.5,-46.1,-19.7,-57.9,0.1,-58C20,-58.1,39.9,-46.3,51.3,-28.1Z" transform="translate(100 100)" />
                    </svg> */}

                    {/* <p>{card.type == "number" ?         card.value
                    : card.value == "reverse" ?          "❤️‍🔥"
                    : card.value == "skip" ?             "🚫"
                    : card.value == "drawTwo" ?          "+2"
                    :
                    "Erreur de carte"
                    }</p> */}
                    <p>UNO</p>
                </div>
            ))}
            </section>


            <section id='pile'>
                <p id="legend-their-turn">Their turn 👆</p>


                <div className='card card-reverse' onClick={() => handlePioche()}>
                        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#F2F4F8" d="M51.3,-28.1C62.7,-9.9,65.5,14.8,55.5,30.4C45.5,46.1,22.8,52.8,-0.8,53.2C-24.4,53.7,-48.7,47.9,-58.6,32.3C-68.5,16.7,-63.9,-8.7,-51.7,-27.4C-39.5,-46.1,-19.7,-57.9,0.1,-58C20,-58.1,39.9,-46.3,51.3,-28.1Z" transform="translate(100 100)" />
                        </svg> */}

                        <p style={{color:"white"}}>UNO</p>
                </div>
                {currentCard && (
                    <div className='card'
                        style={{
                            backgroundColor:
                                currentCard.color === "rouge"
                                ? "#ff595e"
                                : currentCard.color === "jaune"
                                ? "#ffca3a"
                                : currentCard.color === "bleu"
                                ? "#1982c4"
                                : currentCard.color === "vert"
                                ? "#8ac926"
                                : "black",

                            color:
                                currentCard.color === "rouge"
                                ? "#ff595e"
                                : currentCard.color === "jaune"
                                ? "#ffca3a"
                                : currentCard.color === "bleu"
                                ? "#1982c4"
                                : currentCard.color === "vert"
                                ? "#8ac926"
                                : "black",
                        }}
                    >
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#F2F4F8" d="M51.3,-28.1C62.7,-9.9,65.5,14.8,55.5,30.4C45.5,46.1,22.8,52.8,-0.8,53.2C-24.4,53.7,-48.7,47.9,-58.6,32.3C-68.5,16.7,-63.9,-8.7,-51.7,-27.4C-39.5,-46.1,-19.7,-57.9,0.1,-58C20,-58.1,39.9,-46.3,51.3,-28.1Z" transform="translate(100 100)" />
                        </svg>

                        <p>{currentCard.type === "number" ?      currentCard.value
                        : currentCard.value == "reverse" ?          "❤️‍🔥"
                        : currentCard.value == "skip" ?             "🚫"
                        : currentCard.value === "drawTwo" ?         "+2"
                        : currentCard.value === "changeColor" ?     "Col"
                        : "Erreur de carte"
                        }</p>
                    </div>
                )}

                <p id='legend-your-turn'>Your turn 🫵</p>

            </section>


            <section id="container-card">
            {deck.map(card => (
                <div  className="card"
                onClick={() => handleCardThrow(card)}
                style={{
                    backgroundColor:
                        card.color === "rouge"
                        ? "#ff595e"
                        : card.color === "jaune"
                        ? "#ffca3a"
                        : card.color === "bleu"
                        ? "#1982c4"
                        : card.color === "vert"
                        ? "#8ac926"
                        : "black",

                    color:
                        card.color === "rouge"
                        ? "#ff595e"
                        : card.color === "jaune"
                        ? "#ffca3a"
                        : card.color === "bleu"
                        ? "#1982c4"
                        : card.color === "vert"
                        ? "#8ac926"
                        : "black",
                    }}
                >

                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F2F4F8" d="M51.3,-28.1C62.7,-9.9,65.5,14.8,55.5,30.4C45.5,46.1,22.8,52.8,-0.8,53.2C-24.4,53.7,-48.7,47.9,-58.6,32.3C-68.5,16.7,-63.9,-8.7,-51.7,-27.4C-39.5,-46.1,-19.7,-57.9,0.1,-58C20,-58.1,39.9,-46.3,51.3,-28.1Z" transform="translate(100 100)" />
                    </svg>

                    <p>{card.type == "number" ?         card.value
                    : card.value == "reverse" ?          "❤️‍🔥"
                    : card.value == "skip" ?             "🚫"
                    : card.value == "drawTwo" ?          "+2"
                    : card.value === "changeColor" ?     "Col"
                    :
                    "Erreur de carte"
                    }</p>
                </div>
            ))}
            </section>
        </>

    )
}

export default PlayerDeck