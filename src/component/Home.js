import React, {useContext} from 'react';
import LoteriaHeader from './LoteriaHeader';
import LoteriaBoard from './LoteriaBoard';

import {GlobalContext} from '../context/GlobalState'

const Home = () => {
    const {cards} = useContext(GlobalContext);
    console.log(cards)
    return(
        <main>
            <LoteriaHeader/>
            <LoteriaBoard />
        </main>
    )
}

export default Home;