
import React, { useEffect } from 'react';

const HomeNav = () => {
    useEffect(() => {
        const links = document.querySelectorAll(".nav__buttom");
        links.forEach(link => {
            link.onclick = () => {
                const targetId = link.getAttribute("data-link");
                document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
            };
        });
    }, []);

    return (
        <>
            <nav className="nav">
                <div className="nav__menu">
                    <button className="nav__buttom" data-link="section-hunting">полювання</button>
                    <button className="nav__buttom" data-link="section-fishing">риболовля</button>
                    <button className="nav__buttom" data-link="section-weapon">зброя та самооборона</button>
                    <button className="nav__buttom" data-link="section-tourism">туризм</button>
                </div>
            </nav>
        </>
    );
};

export default HomeNav;
