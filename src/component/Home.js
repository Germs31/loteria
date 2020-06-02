import React, {useState} from 'react';
import LoteriaHeader from './LoteriaHeader';
import LoteriaBoard from './LoteriaBoard';
import Images from '../images';

const Home = () => {
    const [useCards, setCards] = useState(Images);
    console.log(useCards)
    return(
        <main>
            <LoteriaHeader />
            <LoteriaBoard />
        </main>
    )
}

export default Home;