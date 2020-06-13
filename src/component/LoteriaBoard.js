import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../context/GlobalState'
const LoteriaBoard = () => {
    const [boardCards,setBoardCards] = useState({})
    const {cards} = useContext(GlobalContext);
    const randomizeBoard = () => {
        let randomCard = []
        for(let i = 1; i <= 12; i++){
            let randomId = Math.floor(Math.random() * 54)
            randomCard.push(randomId)
        }
        let boardCards = []
        for(let j = 0; j < cards.length; j ++){
            for(let g =0; g <= randomCard.length; g++){
                if(cards[j].id == randomCard[g]){
                    boardCards.push(cards[j])
                }
            } 
        }
        setBoardCards(boardCards)
    }

    useEffect(() => {
        randomizeBoard();
    }, [])
    return(
        <div className="board-container">
            <div className="board">
                {
                    console.log(boardCards)
                }
            </div>
        </div>
    )
}

export default LoteriaBoard;