import React, {useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState'
const LoteriaBoard = () => {
    const {cards} = useContext(GlobalContext);
    const randomizeBoard = () => {
        let randomCard = []
        for(let i = 1; i <= 12; i++){
            let randomId = Math.floor(Math.random() * 54)
            randomCard.push(randomId)
        }
        console.log(randomCard)
        console.log(cards[0].id)
        let boardCards = []
        for(let j = 0; j < cards.length; j ++){
            console.log(cards[j].id)
            for(let g =0; g <= randomCard.length; g++){
                if(cards[j].id == randomCard[g]){
                    boardCards.push(cards[j])
                }
            } 
        }
        console.log(boardCards)
    }

    useEffect(() => {
        randomizeBoard();
    })
    return(
        <div className="board-container">
            <div className="board">
            </div>
        </div>
    )
}

export default LoteriaBoard;