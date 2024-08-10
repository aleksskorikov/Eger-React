import React from 'react';
import HomeNave from "../Components/HomeNav";
import "../styles/scss/_home.scss";
import Hanting from "../Components/hanting";
import Fishing from '../Components/fishing';
import Weapon from '../Components/weapon';
import Tourizm from '../Components/tourizm';
import Mail from '../Components/mail';
import OllAll from '../Components/oll-all';
import MarqueeСontent from '../Components/marqueeСontent';

const Home = () => {
    return (
        <>
            <div className="conteiner">
                <MarqueeСontent style={'home'} children={" Ласкаво просимо до нашого магазину полювання, риболовлі, туризму, зброї та комплектуючих! Ми пропонуємо найкращі товари для ваших пригод!"}/>
                <HomeNave />
                <Hanting />
                <Fishing />
                <Weapon />
                <Tourizm />
                <Mail />
                <OllAll />
            </div>
    
        </>
    )
};

export default Home;