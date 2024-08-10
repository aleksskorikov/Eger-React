import React, { useState, useEffect } from 'react';

const buyBtn = () => {
    const [position, setPosition] = useState({ top: '0px', left: '0px' });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        const handleMouseEnter = () => {
            setPosition({
                top: `${getRandomInt(0, 150)}px`,
                left: `${getRandomInt(0, 150)}px`
            });
        };

        const button = document.getElementById('my-button');
        button.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            button.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <>
        <div className="btn-poz">
                <button id='my-button' className='btn buy-btn ' style={{ position: 'relative', ...position }}>
            Купити
        </button>
        </div>
        </>
        
    );
};

export default buyBtn;
