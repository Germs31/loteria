import React, {useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState'
const LoteriaBoard = () => {
    const {cards} = useContext(GlobalContext);
    const randomizeBoard = () => {
        let boardCards = []
        for(let i = 1; i <= 12; i++){
            let randomCards = Math.floor(Math.random() * 54)
            boardCards.push(randomCards)
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